import Notice from "../common/Notice";
import Title from "../common/Title";

function Rules() {

    return (
        <>

            <Notice 
                text={"Use GPose at your own risk!"}
            />
            <p>
                Housing items are regularly placed and removed during opening times. 
                This <strong>will</strong> kick users out of GPose without any warning.<br />
                There is currently no solution to the problem unfortunately. We do have private rooms for photography though, to make sure gpose is not interupted.
            </p>

            <Title 
                text={"SFW Venue"}
                divider={true}
            />
            <p>
                The Oasis is a fully SFW venue, which means we do not tolerate public messages promoting anything NSFW. <br />
                See the full SFW rulelist here: <a href="https://affiliates.silvervalkyrie.events/#vetolist" target="_blank"><u>https://affiliates.silvervalkyrie.events/#vetolist</u></a>
            </p>

            <Title 
                text={"Coco's House Rules"}
                divider={true}
            />
            <strong>General Rules</strong>
            <p>
                <ul>
                    <li>Hide your weapon.</li>
                    <li>Dismiss your minion.</li>
                    <li>Do not use Shout or Yell chat. These are reserved for employees.</li>
                </ul>
            </p>
            
            <strong>Search Info</strong>
            <p>
                Looking to Meld Materia status is reserved for employees.<br />
                Looking for Party status is reserved for employees with specific services.
            </p>

            <strong>Roleplaying Rules</strong>
            <p>
                Coco's Oasis is an immersive roleplaying-focused venue and you are expected to not try to break the immersion. 
                Double parentheses is generally used to indicate out-of-character messages.
            </p>
        </>
    )
}

export default Rules;