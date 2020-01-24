import italicSVG from "../../assets/icons/math-pi.svg";
import {MenuItem} from "./MenuItem";

export class Latex extends MenuItem {
    constructor(vditor: IVditor, menuItem: IMenuItem) {
        super(vditor, menuItem);
        this.element.children[0].innerHTML = menuItem.icon || italicSVG;
        super.bindEvent(vditor);
    }
}
