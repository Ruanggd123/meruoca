import re, glob

def check_file(filename):
    with open(filename, 'r', encoding='utf-8') as f:
        text = f.read()
    matches = re.findall(r'(?:href|src)=["\']([^"\']+)["\']', text)
    print(f"\n--- Links em {filename} ---")
    for m in matches:
        if not m.startswith('http') and not m.startswith('#') and not m.startswith('mailto:') and not m.startswith('javascript:'):
            is_absolute = m.startswith('/') or (len(m) > 1 and m[1] == ':')
            status = "[ABSOLUTO]" if is_absolute else "[OK RELATIVO]"
            print(f"  {status}: {m}")

check_file('index.html')
for f in sorted(glob.glob('provas/*.html')):
    check_file(f)
