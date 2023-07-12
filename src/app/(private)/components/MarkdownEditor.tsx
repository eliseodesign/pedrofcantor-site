import MarkdownIt from 'markdown-it';
import MdEditor from 'react-markdown-editor-lite';
// import style manually
import 'react-markdown-editor-lite/lib/index.css';
import './index.scss'
// Register plugins if required
// MdEditor.use(YOUR_PLUGINS_HERE);

// Initialize a markdown parser
const mdParser = new MarkdownIt(/* Markdown-it options */);

// Finish!
function handleEditorChange({ html, text }: {html:string, text: string}) {
  console.log('handleEditorChange', html, text);
}
export const MarkdownEditor = ({handleChange}:{handleChange:Function}) => {
  return (
    <div>
      <MdEditor style={{ height: '70vh' }} renderHTML={text => mdParser.render(text)} onChange={handleEditorChange} />
    </div>
  );
};