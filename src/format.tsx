import { MenuItemType, MenuTypeType, StaffItemType, ImageType } from "./commonTypes";
import sources from "./sources";

function stringToBoolean(str: string): boolean | null {
    if (str === '0') {
        return false;
    } else if (str === '1') {
        return true;
    } else {
        return null;
    }
}

const format = {
    menu: function(list: MenuItemType[]) {

        const rawTypes = list.map(item => item.type);
        const types = Array.from(new Set(rawTypes));
        
        function convertType(typeText: string) {
            const rules = [
                {keyword: "luxe", replacement:"Luxe"}
            ]

            let ruleIndex:number | null = null;
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


        let menu: MenuTypeType[] = [];
        types.forEach(type => {
            menu.push({
                name: type,
                title: convertType(type),
                items: list.filter(item => type === item.type && item.is_available === true && item)
            });
        })

        return menu;
    },
    staff: function(list: any[]): StaffItemType[] {

        function adjustFemalePosition(position:string, gender:string):string {
            
            if(gender === "male") return position;

            const rules = [
                {keyword: "waiter", replacement: "waitress"},
            ]

            let ruleIndex:number | null = null;
            rules.forEach((rule, index) => {
                if (rule.keyword === position) {
                    ruleIndex = index;
                }
            })

            return ruleIndex === null ? position : rules[ruleIndex].replacement;
        }

        return (list.map(item => (
            {
                ...item,
                positions: item.positions.split(",").map((position: string) => adjustFemalePosition(position, item.gender)),
                admin: stringToBoolean(item.admin),
                isActive: stringToBoolean(item.isActive)
            }
        )))
    },
    gallery: function(list: any[]): ImageType[] {
        const formattedList = list.map(item => ({
            ...item,
            url: `${sources.cdn}/${item.url}`
        }))

        return formattedList;
    }
}

export default format;