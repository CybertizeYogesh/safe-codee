import os

replacements = {
    "src/app/layout.js": [
        ("in Jaipur and all over India", "in Bangalore and all over India")
    ],
    "src/app/manifest.js": [
        ("in Jaipur and all over India", "in Bangalore and all over India")
    ],
    "src/app/about/page.js": [
        ("in Jaipur.", "in Bangalore.")
    ],
    "src/app/branches/page.js": [
        ("Jaipur, and other major cities", "Mangalore, and other major cities"),
        ('{ name: "Packers and Movers Jaipur", path: "/packers-and-movers-jaipur.html" },', '{ name: "Packers and Movers Mangalore", path: "/packers-and-movers-mangalore.html" },'),
        ('{ name: "Packers and Movers Jodhpur", path: "/packers-and-movers-jodhpur.html" },', '{ name: "Packers and Movers Belgaum", path: "/packers-and-movers-belgaum.html" },'),
        ('{ name: "Packers and Movers Kota", path: "/packers-and-movers-kota.html" },', '{ name: "Packers and Movers Hubli", path: "/packers-and-movers-hubli.html" },')
    ],
    "src/app/page.js": [
        ('title: "Best Packers and Movers in Jaipur | Home Shifting Services",', 'title: "Best Packers and Movers in Bangalore | Home Shifting Services",'),
        ('location: "Jaipur",', 'location: "Bangalore",'),
        ('from jaipur to noida', 'from Bangalore to noida'),
        ('in jaipur for my home relocation', 'in Bangalore for my home relocation'),
        ('in Jaipur. Relocation home or relocating', 'in Bangalore. Relocation home or relocating'),
        ('Packers and Movers Jaipur Shifting Process Animation', 'Packers and Movers Bangalore Shifting Process Animation'),
        ('Packers & Movers - Jaipur', 'Packers & Movers - Bangalore'),
        ('packers and movers in Jaipur. With 16 years', 'packers and movers in Bangalore. With 16 years'),
        ('branches across Jaipur', 'branches across Bangalore'),
        ('services in Jaipur.', 'services in Bangalore.'),
        ('Charges in Jaipur | Affordable Packers and Movers in Jaipur', 'Charges in Bangalore | Affordable Packers and Movers in Bangalore'),
        ('in Jaipur constantly upgrade', 'in Bangalore constantly upgrade'),
        ('in Jaipur, we have', 'in Bangalore, we have'),
        ('in Jaipur offer', 'in Bangalore offer')
    ]
}

count = 0
for file_path, rep_list in replacements.items():
    if not os.path.exists(file_path):
        print(f"Skipping (not found): {file_path}")
        continue
        
    try:
        with open(file_path, "r", encoding="utf-8") as f:
            content = f.read()
            
        updated = False
        for old, new in rep_list:
            if old in content:
                content = content.replace(old, new)
                updated = True
            else:
                print(f"Warning: '{old}' not found in {file_path}")
                
        if updated:
            with open(file_path, "w", encoding="utf-8") as f:
                f.write(content)
            print(f"Updated: {file_path}")
            count += 1
    except Exception as e:
        print(f"Error updating {file_path}: {e}")

print(f"Total files updated: {count}")
