const findTestByAttr = (wrapper, value) => wrapper.find(`[data-test="${value}"]`);

export default findTestByAttr