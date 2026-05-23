import urllib.request

url = "https://www.indianbestpackersmovers.com/contact.html"
headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
}

req = urllib.request.Request(url, headers=headers)
try:
    with urllib.request.urlopen(req) as response:
        html = response.read().decode('utf-8', errors='ignore')
        with open("scratch/contact_live.html", "w", encoding="utf-8") as f:
            f.write(html)
        print("Success")
except Exception as e:
    print(f"Error: {e}")
