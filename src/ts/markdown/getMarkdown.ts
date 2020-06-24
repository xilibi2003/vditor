export const getMarkdown = (vditor: IVditor) => {
    if (vditor.currentMode === "sv") {
        return vditor.lute.VditorSVDOM2Md(vditor.sv.element.innerHTML);
    } else if (vditor.currentMode === "wysiwyg") {
        return vditor.lute.VditorDOM2Md(vditor.wysiwyg.element.innerHTML);
    } else if (vditor.currentMode === "ir") {
        return vditor.lute.VditorIRDOM2Md(vditor.ir.element.innerHTML);
    }
    return "";
};
