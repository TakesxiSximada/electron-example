.PHONY: icon app

app:
	`npm bin`/electron .

icon:
	python tools/create_icon.py dummy icon/icon.png
