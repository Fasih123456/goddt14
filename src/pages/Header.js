const Header = () => {
    return(
    <div id='header'>
        <div class="jumbotron">
            <div class="ui grid">
                <div class="ten wide column">
                    <div class="container text-left">
                        <h1>Donate Today</h1>      
                        <p>Mission, Vission & Values</p>
                    </div>
                </div>
                <div class="six wide column">
                    <div class="container text-left">
                        <h2>Donate By your choice</h2>      
                        <p>Accepting Dontation is Every Province</p>
                        <a id="bookmarkme" href="#" rel="sidebar" title="bookmark this page">Bookmark This Page</a>
                    </div>
                </div>
            </div>
        </div>


        <nav class="navbar navbar-inverse">
            <div class="container-fluid">
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>                        
                    </button>
                    <a class="navbar-brand" href="#"></a>
                </div>
                <div class="collapse navbar-collapse" id="myNavbar">
                    <ul class="nav navbar-nav">
                    <li class="active"><a href="#">Home</a></li>
                    <li><a href="#">Why Donate</a></li>
                    <li><a href="#">Donate Today</a></li>
                    <li><a href="#">FAQ</a></li>
                    <li><a href="#">Contact</a></li>
                    </ul>

                </div>
            </div>
        </nav>
    </div>
    );
}

export default Header;