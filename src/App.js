// import logo from './logo.svg';
import './App.css';
// import ImageHandler from './components/imagehandler/ImageHandler'
import ImageHandlerSlider from './components/imagehandler/ImageHandlerSlider'

import { URL_HOST, API_POST, TITLE, DIALOG_TITLE, DIALOG_TEXTCONTENT } from './config'

function App() {

  const stateSelective = [{name: 'Style-1', value: 0, use:true}, 
                          {name: 'Style-2', value: 1, use:true},
                          {name: 'Style-3', value: 2, use:false},
                          {name: 'Style-4', value: 3, use:false}
  ]

  return (
    <div className="App">
      <ImageHandlerSlider url_host={URL_HOST} api_post={API_POST} 
                          title={TITLE} 
                          dialog_title = {DIALOG_TITLE} dialog_textcontent={DIALOG_TEXTCONTENT}
                          initAlpha = {0.2}
                          sSelective = {stateSelective}
      />
    </div>
  );
}

export default App;
