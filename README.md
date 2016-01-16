# Collage
This project allows you to generate an image collage generated from XML files.

## Usage
Run `collage.html` in a browser.  
An image collage is automatically generated.  
You can then click the `GENERATE` button to generate a new collage from another XML file randomly.

## How it works
The project uses jQuery and xml2json.  
The XML files get converted to javascript objects.  
After that `<img>` DOM elements are generated from the data retrieved from the XML files.  
Then styles are applied according to the properties set in the XML files.  

## Structure of the XML collage files

The collage files use the following schema: [https://github.com/EmilianStankov/Collage/blob/master/data/collage.xsd](https://github.com/EmilianStankov/Collage/blob/master/data/collage.xsd)

The _collage_ element may contain many _image_ elements.  

An _image_ element contains:  
- source - the location of the image (url)  
- title - a name for the image   
- position-x - offset on the x axis (px)  
- position-y - offset on the y axis (px)  
- width - the width of the image (px)  
- height - the height of the image (px)  
- rotation (deg)  
- alpha - opacity for the image (%)  

### Example collage

![Example](http://i.imgur.com/hsMJzf1.png)