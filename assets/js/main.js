(() => {
    let replaceYearEl = document.getElementById('current-year');
    let experienceDurationEl = document.getElementById('experience-duration');
    const currentYear = new Date().getFullYear();
    const startWorkAt = new Date(2008, 8, 1);
    const experienceDuration = new Date(new Date().getTime() - startWorkAt.getTime()).getFullYear() - 1970;
    const plDurationText = { 10: 'dziesięciu', 11: 'jedenastu', 12: 'dwunastu', 13: 'trzynasta', 14: 'czternastu', 15: 'piętnastu', 16: 'szternastu', 17: 'siedemnastu', 18: 'osiemnastu', 19: 'dziewiętnastu', 20: 'dwudziestu'};

    if (replaceYearEl) {
        replaceYearEl.innerText = currentYear;
    }

    if (experienceDurationEl && plDurationText[experienceDuration]) {
        if (plDurationText[experienceDuration]) {
            experienceDurationEl.innerText = plDurationText[experienceDuration];
        } else {
            experienceDurationEl.innerText = 'X';
        }
    }
})();