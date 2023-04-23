import Notice from "./common/Notice";
import Title from "./common/Title";

function Rules() {

    return (
        <>
            <Notice 
                text={<strong>Use GPose at your own risk!</strong>}
            />
            <p>
                Housing items are regularly placed and removed during opening times. 
                This <strong>will</strong> kick users out of GPose without any warning.<br />
                Unfortunately, there is no possible solution to this case as it is part of the game engine, though we do offer private rooms for photography to ensure gpose is not interrupted.
            </p>

            <Title 
                text={"SFW Venue"}
                divider={true}
            />
            <p>
                The Oasis is a fully SFW venue, which means we do not tolerate public messages promoting anything NSFW. <br />
                See the full SFW rulelist <a href="https://affiliates.silvervalkyrie.events/#vetolist" target="_blank" rel="noreferrer"><u>here</u></a>.
            </p>

            <Title 
                text={"Coco's House Rules"}
                divider={true}
            />
            <strong>General Rules</strong>
            <ul>
                <li>Hide your weapon.</li>
                <li>Dismiss your minion.</li>
                <li>Do not use Shout or Yell chat. These are reserved for employees.</li>
            </ul>

            
            <strong>Search Info</strong>
            <p>
                Looking to Meld Materia status is reserved for employees.<br />
            </p>

            <strong>Roleplaying Rules</strong>
            <p>
            Coco's Oasis is an immersive roleplaying-focused venue. As such, you are expected to not try to break the immersion taking place. <br />
            Double parentheses is generally used to indicate out-of-character messages.
            </p>
        </>
    )
}

export default Rules;