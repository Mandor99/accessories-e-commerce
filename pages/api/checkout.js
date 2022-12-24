import Stripe from "stripe";

const stripe = new Stripe(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY)

export default async function handler(req, res) {
    if(req.method === 'POST'){
        try {
            const session = await stripe.checkout.sessions.create({
                mode: 'payment',
                payment_method_types: ['card'],
                billing_address_collection: "auto",
                success_url: `${req.headers.origin}/success`,
                cancel_url: `${req.headers.origin}/?canceled=true`,
                line_items: req.body.map((item) => {
                    const img = item.image[0].asset._ref.replace('image-', 'https://cdn.sanity.io/images/ajosudtp/production/').replace('-webp', '.webp')
                    return {
                        quantity: item.quantity,
                        price_data: {
                            currency: 'usd',
                            product_data: {
                              name: item.name,
                              images: [img],
                            },
                            unit_amount: item.price * 100,
                          },
                    }
                })
            })
            res.status(200).json(session); // || res.json(session)
        } catch (error) {
            res.status(err.statusCode || 500).json(err.message)
        }
    } else {
        res.setHeader('Allow', 'POST');
        res.status(405).end('Method Not Allowed');
    }
}