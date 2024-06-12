import styles from './index.less';

export default function App() {
  return (
    <Toolbar
      onPlayMovie={() => alert('Playing!')}
      onUploadImage={() => alert('Uploading!')}
    >
      <h1>nihao</h1>
      </Toolbar>
  );
}

function Toolbar(props) {
  console.log(props.children)
  return (
    <div>
      <Button onClick={props.onPlayMovie}>
        Play Movie
      </Button>
      <Button onClick={props.onUploadImage}>
        Upload Image
      </Button>
    </div>
  );
}

function Button({ onClick, children }) {
  return (
    <button onClick={onClick}>
      {children}
    </button>
  );
}

