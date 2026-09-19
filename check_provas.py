import glob, re

html_files = glob.glob('provas/*.html')
for f in sorted(html_files):
    content = open(f, encoding='utf-8').read()
    q_matches = re.findall(r'QUEST[ÃA]O\s+(\d+)', content, re.IGNORECASE)
    print(f"{f}: {len(content):,} bytes | Questões encontradas: {len(set(q_matches))} (max: {max([int(x) for x in q_matches]) if q_matches else 0})")
