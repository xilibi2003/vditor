import italicSVG from "../../assets/icons/pi.svg";
import {MenuItem} from "./MenuItem";

export class InlineLatex extends MenuItem {
    constructor(vditor: IVditor, menuItem: IMenuItem) {
        super(vditor, menuItem);
        this.element.children[0].innerHTML = menuItem.icon || italicSVG;
        super.bindEvent(vditor);
    }
}
