import sys
from pathlib import Path

try:
    import pillow_heif
    from PIL import Image
except ImportError as exc:
    raise SystemExit(f"Required Python package missing: {exc}. Install Pillow and pillow-heif.")


def convert_heif_to_webp(source_path: str, target_path: str, quality: int = 80, width: int | None = None, height: int | None = None):
    source = Path(source_path)
    if not source.exists():
        raise FileNotFoundError(f"Source file not found: {source}")

    heif_file = pillow_heif.open_heif(str(source))
    image = heif_file.to_pillow()

    if width is not None and height is not None:
        image = image.resize((width, height), Image.LANCZOS)

    target = Path(target_path)
    image.save(str(target), format='WEBP', quality=quality, method=6)


if __name__ == '__main__':
    if len(sys.argv) < 3:
        raise SystemExit('Usage: python scripts/heif_to_webp.py input.heic output.webp [quality] [width] [height]')

    source_file = sys.argv[1]
    target_file = sys.argv[2]
    quality_value = int(sys.argv[3]) if len(sys.argv) > 3 else 80
    width_value = int(sys.argv[4]) if len(sys.argv) > 4 and sys.argv[4] else None
    height_value = int(sys.argv[5]) if len(sys.argv) > 5 and sys.argv[5] else None

    convert_heif_to_webp(source_file, target_file, quality_value, width_value, height_value)
