import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    const products = [
        {
            id: 1,
            name: 'วันทัช ถุงยางอนามัย แฮปปี้',
            price: '93 บาท',
            image: 'https://media.allonline.7eleven.co.th/pdzoom/582359-00-condom-onetouch-v2.jpg',
        },
        {
            id: 2,
            name: 'วันทัช ถุงยางอนามัย แม็กซ์ ดอท',
            price: '98 บาท',
            image: 'https://media.allonline.7eleven.co.th/pdzoom/582355-00-condom-onetouch-v1.jpg',
        },
        {
            id: 3,
            name: 'วันทัช ถุงยางอนามัย มิกซ์ 3 พลัส',
            price: '152 บาท',
            image: 'https://media.allonline.7eleven.co.th/pdzoom/582354-00-condom-onetouch-v1.jpg',
        },
    ]
    return NextResponse.json({
        data : products
    })
}