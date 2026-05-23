import os

src_dir = "src"
old_emails = ["info@indianbestpackersmovers.com", "indianbestpackersmovers@gmail.com"]
new_email = "agarwalpackersmoversa@gmail.com"

count = 0
for root, dirs, files in os.walk(src_dir):
    for file in files:
        if file.endswith((".js", ".jsx", ".html", ".css", ".json")):
            file_path = os.path.join(root, file)
            try:
                with open(file_path, "r", encoding="utf-8") as f:
                    content = f.read()
                
                updated = False
                for old_email in old_emails:
                    if old_email in content:
                        content = content.replace(old_email, new_email)
                        updated = True
                
                if updated:
                    with open(file_path, "w", encoding="utf-8") as f:
                        f.write(content)
                    print(f"Updated: {file_path}")
                    count += 1
            except Exception as e:
                print(f"Error reading {file_path}: {e}")

print(f"Total files updated: {count}")
