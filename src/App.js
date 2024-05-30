import './App.css';
import Avatars from './components/avataSegment';
import LatestTopics from './components/latestTopics';
import Navbar from './components/navbar';
import SearchArea from './components/searchArea';
import TopicsTile from './components/topicTiles';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <SearchArea/>
      <Avatars/>
      <TopicsTile/>
      <LatestTopics/>
    </div>
  );
}

export default App;
