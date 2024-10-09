
export function ShoppingCartIcon({ className }) {
    return (
        <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
        </svg>
    )
}

export function XMark({ className }) {
    return (
        <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
        </svg>
    )
}

export function PokeballIcon({ className }) {
    return (
        <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 859 858.94" stroke-width="2" stroke="white" >
            <path stroke-linecap="round" stroke-linejoin="round" d="M1125,728.09c-22.82-11.92-47.94-14-72.71-16.74-84.93-9.42-170.26-11.81-255.62-13.15-5.36-.09-8-1.35-9.92-6.9-14.29-41-48.95-66-90.57-65.85-41.33.15-75.93,25.16-89.91,65.51-1.82,5.25-4,7.22-9.67,7.26q-96.89.76-193.54,7.64c-38,2.71-76.09,5.51-113.39,14.27a84.58,84.58,0,0,0-23.29,9.3c2-148.63,58.91-268.51,177.75-356.3C587,267.59,779.53,265.46,923.93,356.06,1077.85,452.62,1130.47,613.81,1125,728.09Z"
                transform="translate(-266.42 -290.87)"
            />
            <path stroke-linecap="round" stroke-linejoin="round" d="M533.21,745.16c20.79,0,41.59.18,62.39-.12,5.61-.08,8.69.94,11,6.9,15.11,39.73,49.91,64,90.43,63.82,40.85-.19,73.77-24.14,89.2-65.16,1.54-4.1,3.49-5.71,8-5.56,43.75,1.55,87.53,2.5,131.26,4.41,39.37,1.72,78.73,4.11,117.91,8.56,23.39,2.66,46.77,5.29,69.43,12.32,7.31,2.27,9.43,5.9,8.39,13.5C1098.25,950.46,969.57,1094.3,805.89,1136c-229.83,58.53-459.29-73.73-524.13-302.16-5-17.6-8.25-35.58-11.41-53.59-1-5.59,2-7.22,5.93-8.73,13.39-5.18,27.48-7.57,41.57-9.6,35.64-5.11,71.49-8.17,107.45-10s71.92-3.69,107.88-5.53Zm534.1,63.39c-10.66-1.4-20.75-3-30.9-4-68.32-6.69-136.89-8.93-205.45-11.39-8-.28-12.59,2-17.3,8.77-58.2,83.65-179.81,82.34-236.3-2.41-3.15-4.72-6.29-6.57-11.93-6.36-76.6,2.88-153.26,4.4-229.42,14.52-9,1.2-10.44,3.5-8.14,11.83,15.89,57.44,42.31,109.4,82.63,153.34,94.88,103.36,212.71,145.16,351,123.29,95.38-15.09,173.32-63.17,233.79-138.69C1030.45,913.51,1054.16,863.88,1067.31,808.55Z"
                transform="translate(-266.42 -290.87)"
            />
            <path stroke-linecap="round" stroke-linejoin="round" d="M763.45,720.79a67,67,0,1,1-133.92-.88c.2-36.61,30.49-66.4,67.38-66.26C733.56,653.78,763.53,684,763.45,720.79Z"
                transform="translate(-266.42 -290.87)"
            />
        </svg>
    )
}

export function Plus({ className, onClick }) {
    return (
        <svg onClick={onClick} className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        </svg>


    )
}

export function Minus({ className, onClick }) {
    return (
        <svg onClick={onClick} className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6" >
            <path stroke-linecap="round" stroke-linejoin="round" d="M15 12H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        </svg>

    )
}

export function Trash({ className, onClick }) {
    return (
        <svg onClick={onClick} className={className}xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
        </svg>

    )
}