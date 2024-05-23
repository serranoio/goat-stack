import React, { useEffect, useState } from "react"
import "./App.css"
import { Button } from "./components/ui/button"
import { useQuery } from "react-query";
import { useBoundStore, useStore } from "./Routes";

// example of a custom hook
const useRandomQuote = () => {
    const fetchCall = async () => {
        const response = await fetch("https://api.quotable.io/random")
        const msg = await response.json()
        return msg
    } 
    
    // we are using react query. This is just a basic call with a refetch function passed through
    const {data, isLoading, error, refetch} = useQuery(
        'quote', 
        fetchCall
        )

    return {data, isLoading, error, refetch}
}


export default function App() {
    const {data: quote, isLoading, error, refetch} = useRandomQuote()

    const quoteState = useStore((state: any) => state) 
    const persistentQuoteState = useBoundStore((state: any) => state) 


    console.log(persistentQuoteState)
    useEffect(() => {
        if (quote) {
            quoteState.addQuote(quote.content)
            persistentQuoteState.addQuote(quote.content)
        }
    }, [quote])


    const showQuote = () => {
        if (error) {
            return <div>Error in calling the endpoint</div>
        }

        if (isLoading) {
            return <div>Is loading...</div>
        }

        return <p>{quote?.content}</p> 
    }

    return <main>
        <div className="justify-center flex gap-2">
            <Button variant={"outline"} onClick={() => refetch()}>Fetch fun quote</Button>
            <Button variant={"default"} onClick={() => {
                persistentQuoteState.removeAllQuotes();
                quoteState.removeAllQuotes();

            }}>Remove all quotes</Button>
        </div>
        <div>
            <h2 className="h2">Current Quote:</h2>
        {showQuote()}
        </div>

        <div>
            <h3 className="h3">quotes</h3>
        {quoteState.quotes.map((quote: string, key: number) => {
            return <p className="py-2" key={key}>{quote}</p>
        })}
            <h3 className="h3">Persistent quotes</h3>
        {persistentQuoteState.quotes.map((quote: string, key: number) => {
            return <p className="py-2" key={key}>{quote}</p>
        })}
        </div>
        <h1 className="h1 text-center">
        App Template h1
        </h1> 
        <h2 className="h2">
        h2
        </h2> 
        <h3 className="h3">
        h3
        </h3> 
        <h4 className="h4">
        h4
        </h4> 
        <p className="p">GOATED Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima ipsum, qui rerum nisi nemo nulla cum. Eos, odit eveniet. Sint dolor ipsum ea voluptates reiciendis asperiores velit maxime, ipsam cum eligendi vero similique reprehenderit et eum quas obcaecati dolorem. Ullam magnam aliquam similique deserunt fugiat ipsa quas est ratione, provident laboriosam incidunt ad? Harum cum, vitae itaque magnam amet fuga, accusamus provident maiores temporibus nulla culpa! Unde sapiente aliquid officia excepturi eveniet beatae vitae nulla quas et, sed iste veniam vero tenetur nam quasi maxime eum voluptas tempora quisquam ad at. Placeat itaque dicta nobis minus earum eligendi exercitationem deleniti magni laborum, similique, molestias recusandae, enim sapiente consequuntur impedit natus delectus aliquid illo laboriosam dolorum doloremque. Dolores, praesentium laboriosam illum obcaecati exercitationem minima vitae doloribus fuga alias nobis. Ex, necessitatibus? Maiores provident vitae exercitationem distinctio, eum necessitatibus animi vero dolore reprehenderit! Impedit aspernatur alias corrupti eum, molestiae tempore deserunt recusandae porro, pariatur at quisquam eaque provident, necessitatibus eligendi placeat ipsa totam consequuntur numquam quae ab est illo natus dignissimos labore? Quod non a fuga possimus, consequatur placeat amet suscipit veniam vel adipisci iure consectetur iste aut! Ipsam possimus praesentium illo. Quis, repellat sequi? Libero voluptatibus dolorem numquam provident aspernatur nam.</p>
        <p className="my-4 p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi dolor consequuntur omnis ab nesciunt iste fugit incidunt minus at quibusdam cupiditate laudantium sapiente expedita libero sunt nisi consequatur deserunt, dignissimos, tempora magnam corporis. Perspiciatis veritatis, beatae consequatur accusantium voluptatem, odio numquam quibusdam iure tenetur sapiente harum magni doloribus delectus in veniam id ea facere mollitia vitae voluptatibus vel suscipit. Et natus quibusdam error ad magni voluptates voluptatem minima cumque! Magnam dicta quam molestias nesciunt mollitia ad nisi. Reprehenderit praesentium cupiditate in nisi, illum voluptas tempore exercitationem facilis accusantium ab voluptatum eius ullam beatae libero repellat minus iste, inventore recusandae ad.</p>
        <blockquote className="my-4 lockquote">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi dolor consequuntur omnis ab nesciunt iste fugit incidunt minus at quibusdam cupiditate laudantium sapiente expedita libero sunt nisi consequatur deserunt, dignissimos, tempora magnam corporis. Perspiciatis veritatis, beatae consequatur accusantium voluptatem, odio numquam quibusdam iure tenetur sapiente harum magni doloribus delectus in veniam id ea facere mollitia vitae voluptatibus vel suscipit. Et natus quibusdam error ad magni voluptates voluptatem minima cumque! Magnam dicta quam molestias nesciunt mollitia ad nisi. Reprehenderit praesentium cupiditate in nisi, illum voluptas tempore exercitationem facilis accusantium ab voluptatum eius ullam beatae libero repellat minus iste, inventore recusandae ad.</blockquote>
        <span className="my-4 inline-code">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi dolor consequuntur omnis ab nesciunt iste fugit incidunt minus at quibusdam cupiditate laudantium sapiente expedita libero sunt nisi consequatur deserunt, dignissimos, tempora magnam corporis. Perspiciatis veritatis, beatae consequatur accusantium voluptatem, odio numquam quibusdam iure tenetur sapiente harum magni doloribus delectus in veniam id ea facere mollitia vitae voluptatibus vel suscipit. Et natus quibusdam error ad magni voluptates voluptatem minima cumque! Magnam dicta quam molestias nesciunt mollitia ad nisi. Reprehenderit praesentium cupiditate in nisi, illum voluptas tempore exercitationem facilis accusantium ab voluptatum eius ullam beatae libero repellat minus iste, inventore recusandae ad.</span>
        <p className="my-4 lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi dolor consequuntur omnis ab nesciunt iste fugit incidunt minus at quibusdam cupiditate laudantium sapiente expedita libero sunt nisi consequatur deserunt, dignissimos, tempora magnam corporis. Perspiciatis veritatis, beatae consequatur accusantium voluptatem, odio numquam quibusdam iure tenetur sapiente harum magni doloribus delectus in veniam id ea facere mollitia vitae voluptatibus vel suscipit. Et natus quibusdam error ad magni voluptates voluptatem minima cumque! Magnam dicta quam molestias nesciunt mollitia ad nisi. Reprehenderit praesentium cupiditate in nisi, illum voluptas tempore exercitationem facilis accusantium ab voluptatum eius ullam beatae libero repellat minus iste, inventore recusandae ad.</p>
        <p className="my-4 large">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi dolor consequuntur omnis ab nesciunt iste fugit incidunt minus at quibusdam cupiditate laudantium sapiente expedita libero sunt nisi consequatur deserunt, dignissimos, tempora magnam corporis. Perspiciatis veritatis, beatae consequatur accusantium voluptatem, odio numquam quibusdam iure tenetur sapiente harum magni doloribus delectus in veniam id ea facere mollitia vitae voluptatibus vel suscipit. Et natus quibusdam error ad magni voluptates voluptatem minima cumque! Magnam dicta quam molestias nesciunt mollitia ad nisi. Reprehenderit praesentium cupiditate in nisi, illum voluptas tempore exercitationem facilis accusantium ab voluptatum eius ullam beatae libero repellat minus iste, inventore recusandae ad.</p>
        <p className="my-4 small">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi dolor consequuntur omnis ab nesciunt iste fugit incidunt minus at quibusdam cupiditate laudantium sapiente expedita libero sunt nisi consequatur deserunt, dignissimos, tempora magnam corporis. Perspiciatis veritatis, beatae consequatur accusantium voluptatem, odio numquam quibusdam iure tenetur sapiente harum magni doloribus delectus in veniam id ea facere mollitia vitae voluptatibus vel suscipit. Et natus quibusdam error ad magni voluptates voluptatem minima cumque! Magnam dicta quam molestias nesciunt mollitia ad nisi. Reprehenderit praesentium cupiditate in nisi, illum voluptas tempore exercitationem facilis accusantium ab voluptatum eius ullam beatae libero repellat minus iste, inventore recusandae ad.</p>
        <p className="my-4 muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi dolor consequuntur omnis ab nesciunt iste fugit incidunt minus at quibusdam cupiditate laudantium sapiente expedita libero sunt nisi consequatur deserunt, dignissimos, tempora magnam corporis. Perspiciatis veritatis, beatae consequatur accusantium voluptatem, odio numquam quibusdam iure tenetur sapiente harum magni doloribus delectus in veniam id ea facere mollitia vitae voluptatibus vel suscipit. Et natus quibusdam error ad magni voluptates voluptatem minima cumque! Magnam dicta quam molestias nesciunt mollitia ad nisi. Reprehenderit praesentium cupiditate in nisi, illum voluptas tempore exercitationem facilis accusantium ab voluptatum eius ullam beatae libero repellat minus iste, inventore recusandae ad.</p>
    </main>

}