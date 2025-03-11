
function getTooltipTranslation(key) {
    let translation = Text.translate(key).string
    return translation !== key ? translation : null
}

