
import GenRandomInt from "./GenRandomInt";
import img1 from '../Images/photo1.jpg'

const reactDescriptions= ['Fundamental', 'Crucial', 'Core']


// The img-redundant-alt rule has the following default options: ["image","picture","photo"]

// This means one of your alt descriptions contains one of these words. The logic behind the error is that describing an image as image is not useful to readers.

// You can resolve by removing any instances of the words "image", "picture", or "photo" from your alt tags or by modifying the default options for this rule if you wish to ignore them.

function Header(){

  // store our react description in the variable

const description = reactDescriptions[GenRandomInt(2)]
return(
    <header>
    <img src={img1} alt='souvenir' />
    <h1>Welcome to My Channel</h1>
    <p>{description} React Concepts</p>
    </header>
)
}

export default Header