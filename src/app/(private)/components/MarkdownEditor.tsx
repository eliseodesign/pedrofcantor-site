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
function handleEditorChange({ html, text }: {html:any, text: string}) {
  console.log('handleEditorChange', html, text);
}
export const MarkdownEditor = () => {
  return (
    <div >
      <MdEditor style={{ height: '500px' }} renderHTML={text => mdParser.render(text)} onChange={handleEditorChange} />
    </div>

  );
};