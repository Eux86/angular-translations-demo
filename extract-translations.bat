@echo off
set modules=alpha beta
set languages=en es it

for %%l in (%languages%) do (
    echo Language: %%l
    for %%m in (%modules%) do (
        .\node_modules\.bin\ngx-translate-extract --input ./src/app/%%m --output ./src/assets/i18n/%%m/%%l.json --clean --sort --format namespaced-json --marker _
        echo Module: %%m 
    )
)