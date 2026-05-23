import sys
from PIL import Image
from collections import Counter

def get_colors(image_path):
    try:
        img = Image.open(image_path)
    except Exception as e:
        print(f"Error opening image: {e}")
        return
        
    img = img.convert('RGBA')
    width, height = img.size
    
    # We want to identify the dark navy blue and the orange.
    # Let's count all non-transparent pixels, grouping them slightly to find distinct color clusters.
    colors = []
    for x in range(width):
        for y in range(height):
            r, g, b, a = img.getpixel((x, y))
            if a < 100:
                continue
            # Skip white background
            if r > 240 and g > 240 and b > 240:
                continue
            colors.append((r, g, b))
            
    # Let's separate colors into:
    # 1. Dark/Navy blue (where B > G and R is small, or generally low R/G, high B compared to R)
    # 2. Orange/Yellow (where R is high, G is medium, B is low)
    navy_colors = []
    orange_colors = []
    
    for r, g, b in colors:
        # Orange/Red/Yellow check
        if r > 150 and g > 50 and b < 100:
            orange_colors.append((r, g, b))
        # Navy blue check
        elif b > 50 and r < 50:
            navy_colors.append((r, g, b))
            
    c_navy = Counter(navy_colors)
    c_orange = Counter(orange_colors)
    
    print("Dominant Navy Blue Colors:")
    for (r, g, b), count in c_navy.most_common(5):
        hex_code = f"#{r:02x}{g:02x}{b:02x}"
        print(f"  {hex_code} | RGB: ({r}, {g}, {b}) | Count: {count}")
        
    print("\nDominant Orange Colors:")
    for (r, g, b), count in c_orange.most_common(5):
        hex_code = f"#{r:02x}{g:02x}{b:02x}"
        print(f"  {hex_code} | RGB: ({r}, {g}, {b}) | Count: {count}")

if __name__ == "__main__":
    path = r"c:\Users\Yogesh Poonia\Desktop\new-website\public\images\logos\logo.png"
    get_colors(path)
