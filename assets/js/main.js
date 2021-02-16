(() => {
  let replaceYearEl = $("#current-year");
  let experienceDurationEl = $("#experience-duration");
  const currentYear = new Date().getFullYear();
  const startWorkAt = new Date(2008, 8, 1);
  const experienceDuration =
    new Date(new Date().getTime() - startWorkAt.getTime()).getFullYear() - 1970;
  const plDurationText = {
    10: "dziesięciu",
    11: "jedenastu",
    12: "dwunastu",
    13: "trzynasta",
    14: "czternastu",
    15: "piętnastu",
    16: "szternastu",
    17: "siedemnastu",
    18: "osiemnastu",
    19: "dziewiętnastu",
    20: "dwudziestu",
  };

  if (replaceYearEl.length > 0) {
    replaceYearEl.text(currentYear);
  }

  if (experienceDurationEl.length > 0 && plDurationText[experienceDuration]) {
    if (plDurationText[experienceDuration]) {
      experienceDurationEl.text(plDurationText[experienceDuration]);
    } else {
      experienceDurationEl.text("X");
    }
  }

  $(".show-phone-number, .show-email-address").each((index, el) => {
    let $wrapper = $(el);
    let $replaceElement = $wrapper.find(".replace");

    $wrapper.click((event) => {
      event.preventDefault();

      if ($wrapper.data("phone")) {
        $replaceElement.text($wrapper.data("phone"));
        $wrapper.attr("href", "callto:" + $wrapper.data("phone"));
      } else if ($wrapper.data("email")) {
        $replaceElement.text($wrapper.data("email"));
        $wrapper.attr("href", "mailto:" + $wrapper.data("email"));
      }

      $wrapper.off("click");
    });
  });
})();
