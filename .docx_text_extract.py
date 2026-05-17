import zipfile, re, html, sys, pathlib
path = sys.argv[1]
with zipfile.ZipFile(path) as z:
    xml = z.read('word/document.xml').decode('utf-8')
text = re.sub(r'<w:tab\s*/>', '\t', xml)
text = re.sub(r'<w:br\s*/>', '\n', text)
text = re.sub(r'</w:p>', '\n', text)
text = re.sub(r'<[^>]+>', '', text)
text = html.unescape(text)
text = re.sub(r'\n{3,}', '\n\n', text)
out = pathlib.Path(sys.argv[2])
out.write_text(text, encoding='utf-8')
