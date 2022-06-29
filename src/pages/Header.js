import '../css/header.css';
import Navigation from '../components/Navigation';




const Header = () => {
    return (
      <div id="header">
        <div class="jumbotron" id="main-jumbotron">
          <div class="ui grid">
            <div class="nine wide column">
              <div class="container text-left">
                <h1>InTow</h1>
                <p>Donate A Car</p>
              </div>
            </div>
            <div class="seven wide column">
              <div class="container text-left">
                <h2><i class="gg-chevron-right" />Donate By your choice</h2>
                <p><i class="gg-chevron-right"></i>Accepting Dontation is Every Province</p>
                <a id="bookmarkme" href="#" rel="sidebar" title="bookmark this page">
                <i class="gg-chevron-right"></i>Bookmark This Page
                </a>
              </div>
            </div>
          </div>
        </div>
 
        <nav class="navbar navbar-inverse" id="main-nav" style={{ marginBottom: "0px" }}>
          <div class="container-fluid" style={{marginLeft: "0px"}}>

            <div class="navbar-collapse" id="myNavbar">
              <ul class="nav navbar-nav">
                <Navigation />
              </ul>
            </div>
          </div>
        </nav>

        <div class="ui container"></div>
      </div>
    );
}

export default Header;

/* might be needed for cross platform
            <div class="navbar-header">
              <button
                type="button"
                class="navbar-toggle"
                data-toggle="collapse"
                data-target="#myNavbar"
              >
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
              </button>
              <a class="navbar-brand" href="#"></a>
            </div>
*/