import './navbar.scss';

function Navbar() {
    return <div className="navbar">
        <div className="navbar-top">
                <img src="/ableton-hallmark.ef5355379032.svg"></img>
                <div className="navbar-links-left">
                    <a href='/live'> Live</a>
                    <a href='/push'> Push</a>
                    <a href='/link'> Link</a>
                    <a href='/shop'> Shop</a>
                    <a href='/packs'> Packs</a>
                    <a href='/help'> Help</a>
                    <a id="navbar-more" href='/more'> More +</a>
                </div>
                <div className="navbar-links-right">
                    <a id="navbar-demo" href='try'> Try Live for free</a>
                    <a href='account'> Account</a>
                    <a href='logout'> Log out</a>
                </div>


        </div>
    </div>
}

export default Navbar;