import HTMLFlipBook from "react-pageflip";
import Page from "./components/_Page.js";
import Cover from "./components/_Cover.js";
import { useState, useEffect, useRef } from "react";

function Book() {

    const book = useRef();
    const [ menu, setMenu ] = useState([]);
    
    useEffect(() => {
        fetch('https://cocosoasis.info/api/dbQuery.php?query=' + encodeURIComponent("getMenu"))
        .then(response => response.json())
        .then(data => {

            const types = [...new Set(data.map(item => (item.type)))];

            function convertTypeText(typeText) {
                const rules = [
                    {keyword: "drink-alc", replacement: "Alcoholic Drinks"},
                    {keyword: "drink", replacement:"Alcohol-free Drinks"},
                    {keyword: "luxe", replacement:"Luxe"}
                ]

                let ruleIndex = null;
                rules.forEach((rule, index) => {
                    if (rule.keyword === typeText) {
                        ruleIndex = index;
                    }
                })

                //Turn first character uppercase
                typeText = typeText.charAt(0).toUpperCase() + typeText.slice(1);
                
                if (ruleIndex === null) return typeText + "s";
                return rules[ruleIndex].replacement;
            }


            let menu = [];
            types.forEach(type => {
                menu.push({
                    name: type,
                    text: convertTypeText(type),
                    items: data.filter(item => type === item.type && item)
                });
            })

            setMenu(menu);
        })
        .catch(error => console.error(error));
    }, []);

  return (
    <div className="book">

        {menu.length > 0 &&
            <HTMLFlipBook 
                width={500} 
                height={700}
                autoSize={true}
                maxShadowOpacity={0.5}
                showCover={true}
                mobileScrollSupport={true}
                ref={book}
                >

                <Cover>MENU</Cover>
                    {
                        menu.map((type, index) => (
                            <Page 
                                number={index + 1}
                                type={type.name}
                                typeText={type.text}
                                key={type.name + index}
                                items={type.items}
                            />
                        ))
                    }
                
                <Cover></Cover>
            </HTMLFlipBook>
        }
    </div>
  );
}

export default Book;