import MarkdownIt from 'markdown-it';
import MdEditor from 'react-markdown-editor-lite';
// import style manually
import 'react-markdown-editor-lite/lib/index.css';
import './index.scss'
// Register plugins if required
// MdEditor.use(YOUR_PLUGINS_HERE);

// Initialize a markdown parser
const mdParser = new MarkdownIt(/* Markdown-it options */);

type HandleContent = (data: { text: string }, event?: React.ChangeEvent<HTMLTextAreaElement> | undefined) => void

export const MarkdownEditor = ({handleContent}:{handleContent: HandleContent}) => {
  return (
    <div>
      <MdEditor style={{ height: '70vh' }} renderHTML={text => mdParser.render(text)} onChange={handleContent} />
    </div>
  );
};