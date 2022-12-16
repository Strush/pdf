export const replaceContent = (content, mechanism, standard) => {
  let txt = mechanism
    .map((u) => u.label)
    .join(", ")
    .replace(/, ([^,]*)$/, " and $1");
  return content
    .replace("<mechanism>", `${txt}`)
    .replace("<standard>", `${standard}`);
};
