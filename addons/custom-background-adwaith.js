(function(Scratch) {
  'use strict';

  class CustomBackgroundAdwaith {
    getInfo() {
      return {
        id: 'custombackgroundadwaith',
        name: 'Custom Background by Adwaith',
        color1: '#4db6ac',
        color2: '#00897b',
        color3: '#00695c',
        blocks: [
          {
            opcode: 'setColor',
            blockType: Scratch.BlockType.COMMAND,
            text: 'set background color [COLOR]',
            arguments: {
              COLOR: {
                type: Scratch.ArgumentType.COLOR,
                defaultValue: '#00aaff'
              }
            }
          },
          {
            opcode: 'setImage',
            blockType: Scratch.BlockType.COMMAND,
            text: 'set background image from URL [URL]',
            arguments: {
              URL: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'https://turbowarp.org/static/logo.svg'
              }
            }
          },
          {
            opcode: 'chooseFile',
            blockType: Scratch.BlockType.COMMAND,
            text: 'choose image file for background'
          },
          {
            opcode: 'reset',
            blockType: Scratch.BlockType.COMMAND,
            text: 'reset background to default'
          }
        ]
      };
    }

    setColor(args) {
      document.body.style.background = args.COLOR;
      document.body.style.backgroundSize = 'cover';
    }

    setImage(args) {
      document.body.style.backgroundImage = `url("${args.URL}")`;
      document.body.style.backgroundSize = 'cover';
      document.body.style.backgroundRepeat = 'no-repeat';
      document.body.style.backgroundPosition = 'center';
    }

    chooseFile() {
      const input = document.createElement('input');
      input.type = 'file';
      input.accept = 'image/*';
      input.onchange = (event) => {
        const file = event.target.files[0];
        if (file) {
          const reader = new FileReader();
          reader.onload = () => {
            document.body.style.backgroundImage = `url(${reader.result})`;
            document.body.style.backgroundSize = 'cover';
            document.body.style.backgroundRepeat = 'no-repeat';
            document.body.style.backgroundPosition = 'center';
          };
          reader.readAsDataURL(file);
        }
      };
      input.click();
    }

    reset() {
      document.body.style.background = '';
      document.body.style.backgroundImage = '';
    }
  }

  Scratch.extensions.register(new CustomBackgroundAdwaith());
})(Scratch);

