window.DHW_sc = window.DHW_sc || {
  beforeWidget: (widgetCode, widgetName, macroThis) => {
    return window.modSC2DataManager.getWikifyTracer().beforeWidget(
      widgetCode,
      widgetName,
      macroThis.passageTitle || macroThis.passageObj.title,
      macroThis.passageObj
    );
  },
  afterWidget: (widgetCode, widgetName, macroThis) => {
    return window.modSC2DataManager.getWikifyTracer().afterWidget(
      widgetCode,
      widgetName,
      macroThis.passageTitle || macroThis.passageObj.title,
      macroThis.passageObj
    );
  },
};
// widgetCode = window.DHW_sc.beforeWidget(widgetCode, widgetName, macroThis);
// window.DHW_sc.afterWidget(widgetCode, widgetName, macroThis);
