import React from 'react';
import Link from 'next/link';

class Switcher extends React.Component {
  render() {
  	return (
        <div id="style-switcher">
            <div>
                <h3>Select your color</h3>
                <ul className="pattern">
                    <li>
                    <Link href="JavaScript:Void(0);"  ><a className="color1"></a></Link>
                    </li>
                    <li>
                    <Link href="JavaScript:Void(0);"  ><a className="color2"></a></Link>
                    </li>
                    <li>
                       <Link href="JavaScript:Void(0);" ><a className="color3"></a></Link>
                    </li>
                    <li>
                       <Link href="JavaScript:Void(0);" ><a className="color4"></a></Link>
                    </li>
                    <li>
                        <Link href="JavaScript:Void(0);" ><a className="color5"></a></Link>
                    </li>
                    <li>
                       <Link href="JavaScript:Void(0);"  ><a className="color6"></a></Link>
                    </li>
                    <li>
                       <Link href="JavaScript:Void(0);" ><a className="color7"></a></Link>
                    </li>
                    <li>
                       <Link href="JavaScript:Void(0);"  ><a className="color8"></a></Link>
                    </li>
                </ul>
            </div>
            <div className="bottom">
            <a href="#" className="settings"><i className="mdi mdi-settings mdi-spin"></i></a>
            </div>
        </div>
  	);
  }
}
export default Switcher;
