import {VDITOR_VERSION} from "../constants";

export class Options {
    public options: IOptions;
    private defaultOptions: IOptions = {
        after: undefined,
        cache: true,
        cdn: `https://cdn.jsdelivr.net/npm/vditor@${VDITOR_VERSION}`,
        classes: {
            preview: "",
        },
        counter: 0,
        debugger: false,
        height: "auto",
        hideToolbar: false,
        hint: {
            delay: 200,
            emoji: {
                "+1": "👍",
                "-1": "👎",
                "confused": "😕",
                "eyes": "👀️",
                "heart": "❤️",
                "rocket": "🚀️",
                "smile": "😄",
                "tada": "🎉️",
            },
            emojiPath: `https://cdn.jsdelivr.net/npm/vditor@${VDITOR_VERSION}/dist/images/emoji`,
        },
        keymap: {
            deleteLine: "⌘-Backspace",
            duplicate: "⌘-D",
        },
        lang: "zh_CN",
        mode: "wysiwyg",
        placeholder: "",
        preview: {
            delay: 1000,
            hljs: {
                enable: true,
                lineNumber: true,
                style: "github",
            },
            markdown: {
                autoSpace: false,
                chinesePunct: false,
                fixTermTypo: false,
                footnotes: true,
                toc: false,
            },
            math: {
                engine: "KaTeX",
                inlineDigit: false,
                macros: {},
            },
            maxWidth: 768,
            mode: "both",
        },
        resize: {
            enable: true,
            position: "bottom",
        },
        theme: "classic",
        toolbar: [{
            hotkey: "⌘-E",
            name: "emoji",
            tipPosition: "ne",
        }, {
            hotkey: "⌘-H",
            name: "headings",
            tipPosition: "ne",
        }, {
            hotkey: "⌘-B",
            name: "bold",
            prefix: "**",
            suffix: "**",
            tipPosition: "ne",
        }, {
            hotkey: "⌘-I",
            name: "italic",
            prefix: "*",
            suffix: "*",
            tipPosition: "ne",
        }, {
            hotkey: "⌘-S",
            name: "strike",
            prefix: "~~",
            suffix: "~~",
            tipPosition: "ne",
        }, {
            hotkey: "⌘-K",
            name: "link",
            prefix: "[",
            suffix: "](https://)",
            tipPosition: "n",
        }, {
            name: "|",
        }, {
            hotkey: "⌘-L",
            name: "list",
            prefix: "* ",
            tipPosition: "n",
        }, {
            hotkey: "⌘-O",
            name: "ordered-list",
            prefix: "1. ",
            tipPosition: "n",
        }, {
            hotkey: "⌘-J",
            name: "check",
            prefix: "* [ ] ",
            tipPosition: "n",
        }, {
            name: "|",
        }, {
            hotkey: "⌘-;",
            name: "quote",
            prefix: "> ",
            tipPosition: "n",
        }, {
            hotkey: "⌘-⇧-D",
            name: "line",
            prefix: "---",
            tipPosition: "n",
        }, {
            hotkey: "⌘-U",
            name: "code",
            prefix: "```\n",
            suffix: "\n```",
            tipPosition: "n",
        }, {
            hotkey: "⌘-G",
            name: "inline-code",
            prefix: "`",
            suffix: "`",
            tipPosition: "n",
        }, {
            name: "|",
        }, {
            hotkey: "⌘-⇧-U",
            name: "upload",
            tipPosition: "n",
        }, {
            name: "record",
            tipPosition: "n",
        }, {
            hotkey: "⌘-M",
            name: "table",
            prefix: "| col1",
            suffix: " | col2 | col3 |\n| --- | --- | --- |\n|  |  |  |\n|  |  |  |",
            tipPosition: "n",
        }, {
            name: "|",
        }, {
            hotkey: "⌘-Z",
            name: "undo",
            tipPosition: "n",
        }, {
            hotkey: "⌘-Y",
            name: "redo",
            tipPosition: "n",
        }, {
            name: "|",
        }, {
            hotkey: "⌘-⇧-M",
            name: "edit-mode",
            tipPosition: "nw",
        }, {
            hotkey: "⌘-P",
            name: "both",
            tipPosition: "nw",
        }, {
            hotkey: "⌘-⇧-P",
            name: "preview",
            tipPosition: "nw",
        }, {
            hotkey: "⌘-⇧-F",
            name: "format",
            tipPosition: "nw",
        }, {
            name: "|",
        }, {
            hotkey: "⌘-'",
            name: "fullscreen",
            tipPosition: "nw",
        }, {
            name: "devtools",
            tipPosition: "nw",
        }, {
            name: "info",
            tipPosition: "nw",
        }, {
            name: "help",
            tipPosition: "nw",
        }, {
            name: "latex",
            prefix: "$$\n",
            suffix: "\n$$",
            tipPosition: "n",
        },
        {
            name: "inline-latex",
            prefix: "$",
            suffix: "$",
            tipPosition: "n",
        },
         {
            name: "br",
        }],
        typewriterMode: false,
        upload: {
            filename: (name: string) => name.replace(/\W/g, ""),
            linkToImgUrl: "",
            max: 10 * 1024 * 1024,
            url: "",
            withCredentials: false,
        },
        value: "",
        width: "auto",
    };

    constructor(options: IOptions) {
        this.options = options;
    }

    public merge(): IOptions {
        const toolbar: IMenuItem[] = [];
        if (this.options) {
            if (this.options.toolbar) {
                this.options.toolbar.forEach((menuItem: IMenuItem) => {
                    let currentMenuItem = menuItem;
                    this.defaultOptions.toolbar.forEach((defaultMenuItem: IMenuItem) => {
                        if (typeof menuItem === "string" && defaultMenuItem.name === menuItem) {
                            currentMenuItem = defaultMenuItem;
                        }
                        if (typeof menuItem === "object" && defaultMenuItem.name === menuItem.name) {
                            currentMenuItem = Object.assign({}, defaultMenuItem, menuItem);
                        }
                    });
                    toolbar.push(currentMenuItem);
                });
            }

            if (this.options.upload) {
                this.options.upload = Object.assign({}, this.defaultOptions.upload, this.options.upload);
            }

            if (this.options.classes) {
                this.options.classes = Object.assign({}, this.defaultOptions.classes, this.options.classes);
            }

            if (this.options.keymap) {
                this.options.keymap = Object.assign({}, this.defaultOptions.keymap, this.options.keymap);
            }

            if (this.options.preview) {
                this.options.preview = Object.assign({}, this.defaultOptions.preview, this.options.preview);
                if (this.options.preview.hljs) {
                    this.options.preview.hljs =
                        Object.assign({}, this.defaultOptions.preview.hljs, this.options.preview.hljs);
                }
                if (this.options.preview.math) {
                    this.options.preview.math =
                        Object.assign({}, this.defaultOptions.preview.math, this.options.preview.math);
                }
                if (this.options.preview.markdown) {
                    this.options.preview.markdown =
                        Object.assign({}, this.defaultOptions.preview.markdown, this.options.preview.markdown);
                }
            }

            if (this.options.hint) {
                this.options.hint = Object.assign({}, this.defaultOptions.hint, this.options.hint);
            }

            if (this.options.resize) {
                this.options.resize = Object.assign({}, this.defaultOptions.resize, this.options.resize);
            }
        }

        const mergedOptions = Object.assign({}, this.defaultOptions, this.options);

        if (toolbar.length > 0) {
            mergedOptions.toolbar = toolbar;
        }

        return mergedOptions;
    }
}
