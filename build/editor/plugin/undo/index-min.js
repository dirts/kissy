/*
Copyright 2012, KISSY UI Library v1.40dev
MIT Licensed
build time: Sep 17 18:02
*/
KISSY.add("editor/plugin/undo/index",function(e,b,c,f){function d(){}e.augment(d,{renderUI:function(a){f.init(a);a.addButton("undo",{mode:b.WYSIWYG_MODE,tooltip:"撤销",editor:a},c.UndoBtn);a.addButton("redo",{mode:b.WYSIWYG_MODE,tooltip:"重做",editor:a},c.RedoBtn)}});return d},{requires:["editor","./btn","./cmd"]});
