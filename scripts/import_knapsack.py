
import csv
import hashlib
import json
import math
import sys
from pathlib import Path

EXPECTED_SHA256 = (
    "55b98b9d9d2fc743100f8e48f168e0504b39bee18aad37712d3ccb9d516f044c"
)

ROOT = Path(__file__).resolve().parent.parent


def parse_vector(raw):
    text = str(raw).strip()

    if not (text.startswith("[") and text.endswith("]")):
        raise ValueError("Formato de vector inválido")

    numbers = [
        float(x)
        for x in text[1:-1].replace(",", " ").split()
    ]

    if not numbers or not all(
        math.isfinite(x) for x in numbers
    ):
        raise ValueError("Vector vacío o inválido")

    return numbers


def main():
    source = (
        Path(sys.argv[1]).resolve()
        if len(sys.argv) > 1
        else ROOT / "data" / "knapsack_5_items.csv"
    )

    destination = ROOT / "data" / "knapsack-instances.js"

    content = source.read_bytes()
    checksum = hashlib.sha256(content).hexdigest()

    if checksum != EXPECTED_SHA256:
        raise ValueError(
            "El CSV no coincide con el archivo original "
            f"de la plantilla. SHA-256 obtenido: {checksum}"
        )

    import io

    with io.StringIO(
        content.decode("utf-8-sig"),
        newline=""
    ) as file:
        reader = csv.DictReader(file)

        required = {"Weights", "Prices", "Capacity"}

        if not required.issubset(reader.fieldnames or []):
            raise ValueError("Faltan columnas del CSV")

        instances = []

        for index, row in enumerate(reader):
            if index >= 10:
                break

            weights = parse_vector(row["Weights"])
            values = parse_vector(row["Prices"])
            capacity = float(row["Capacity"])

            if (
                len(weights) != 5
                or len(values) != 5
                or any(x < 0 for x in weights)
                or not math.isfinite(capacity)
                or capacity < 0
            ):
                raise ValueError(
                    f"Datos inválidos en la fila {index}"
                )

            instances.append({
                "id": f"kaggle_opcion1_fila_{index}",
                "pesos": weights,
                "valores": values,
                "capacidad": capacity
            })

    if len(instances) != 10:
        raise ValueError(
            "No se encontraron las diez filas esperadas"
        )

    destination.parent.mkdir(
        parents=True,
        exist_ok=True
    )

    output = (
        "// Instancias auténticas del CSV de Kaggle.\n"
        "// Archivo generado automáticamente.\n"
        f"export const KNAPSACK_SOURCE_SHA256 = {json.dumps(checksum)};\n"
        "export const KNAPSACK_INSTANCES = "
        + json.dumps(
            instances,
            ensure_ascii=False,
            indent=2,
            allow_nan=False
        )
        + ";\n"
    )

    destination.write_text(
        output,
        encoding="utf-8"
    )

    print(f"Importación exitosa: {len(instances)} instancias")

    for item in instances:
        print(
            item["id"],
            "Capacidad:",
            item["capacidad"]
        )

if __name__ == "__main__":
    main()
