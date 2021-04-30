import * as React from "react"
import classes from './logo.module.css'

function Logo(props: any) {

    return (

        <svg className={classes.general}
            viewBox="0 0 1063 958"
            xmlns="http://www.w3.org/2000/svg"
            fillRule="evenodd"
            clipRule="evenodd"
            strokeLinejoin="round"
            strokeMiterlimit={2}

            {...props}
        >
            <path
                d="M818.747 792.248V457.923a89.261 89.261 0 00-10.183-41.408l-33.125-63.309a76.522 76.522 0 01-7.992-24.975l-30.291-218.866h-64.542L642.322 328.23a76.522 76.522 0 01-7.991 24.975l-33.125 63.309a89.261 89.261 0 00-10.184 41.408v334.325c-14.191 33.366-11.441 61.291-6.816 78.55a19.2 19.2 0 0018.558 14.25h204.242a19.2 19.2 0 0018.558-14.25c4.625-17.259 7.375-45.184-6.817-78.55"
                fill="#444"
                fillRule="nonzero"
            />
            <path
                d="M623.187 848.515c-4.625-17.258-7.375-45.183 6.817-78.55V457.923c0-14.425 3.5-28.633 10.183-41.408l33.125-63.316a76.216 76.216 0 007.992-24.967l19.158-218.867h-8.358l-30.292 218.867a76.413 76.413 0 01-7.991 24.967l-33.125 63.316a89.236 89.236 0 00-10.184 41.408v312.042c-14.191 33.367-11.441 61.292-6.816 78.55a19.208 19.208 0 0018.558 14.258h19.492c-8.7 0-16.309-5.85-18.559-14.258"
                fill="#fff"
                fillRule="nonzero"
            />
            <path
                d="M741.977 133.057h-74.191a9.663 9.663 0 01-9.667-9.667c0-5.333 4.325-9.658 9.667-9.658h74.191c5.334 0 9.667 4.325 9.667 9.658 0 5.342-4.333 9.667-9.667 9.667"
                fill="#da7817"
                fillRule="nonzero"
            />
            <path
                d="M745.887 114.547h-80.525v-5.35c0-12.9 10.467-23.358 23.367-23.358h33.8c12.9 0 23.358 10.458 23.358 23.358v5.35zM858.217 11.12l-79.3 83.917 31.2 21.042 48.1-104.959zM533.987 39.587l68.867 92.667 26.15-27.075-95.017-65.592zM603.267 0l27.4 57.717 19.025-13.825L603.267 0zM941.117 800.775c-11.816 20.242-31.85 50.242-55.408 49.45 4.217-6.642 7.158-6.55-2.208-2.208 7.1-31.284 43.375-21.267 57.616-47.242M742.247 852.407c-16.625 26.675-41.833 54.8-68.691 54.425 5.625-9.392 8.916-6.734-2.4-4.984 14.666-34.683 48.266-16.866 71.091-49.441M700.317 856.877c-15.441 19.575-52.741 53.4-75.991 41.933 11.766-4.317 10.958-5.933-1.25-1.258 16.516-35.225 52.575-9.625 77.241-40.675M881.687 805.71c-4.175 12.308-.258 45.858-28.125 61.267 3.625-8.584 4.125-8.592-2.883-.975-7.15-22.292 32.2-38.725 31.008-60.292M855.417 876.34c17.092-23.833 41.967-3.425 62.284-22.083-16.692 17.216-41.8 31.133-61.35 25.033 6-4.983 9.25-4.442-.934-2.95M808.607 890.07c4.817-8.342 7.434-9.017-2.05-2.092-3.658-25.416 41.184-38.616 41.034-62.391-7.884 23.091-9.45 53.1-38.984 64.483M885.676 886.294c5.269 1.398-15.112 5.21-19.595 7.009-16.422 6.674-33.17 13.515-48.31 4.85 5.92-3.251 8.64-2.745-.948-3.05 19.151-20.838 46.435 3.303 68.853-8.809M809.217 846.692c-6.133 11.725-17.666 51.341-44.7 55.275 3-6.825 6.934-9.825-2-2.017-.016-26.042 40.575-29.358 46.7-53.258M852.347 916.925c-23.725 6.492-57.358 14.875-84.475-2.683 8.084-3.817 11.775 1.5-1.025-5.659 28.767-13.641 56.725 20.492 85.5 8.342M766.057 853.877c-5.55 10.866-17.4 51.991-44.15 54.6 3.117-5.009 5.792-6.417-1.991-2.017 1.225-27.292 40.891-27.9 46.141-52.583M805.057 937.21c-19.641-1.408-59.391 6.8-86.266-19.9 12.683.783 13.408 3.233 1.2-3.458 28.65-9.575 56.516 28.266 85.066 23.358M660.737 857.345c-17.85 14.833-57.441 36.108-83.216 24.467 8.058-5.709 12.208-4.4-1.175-3.717 23.466-28.567 56.841.6 84.391-20.75M671.437 917.252c12.075 4.541 12.05 7.216 1.334-3.717 29.8-5.65 58.7 40.958 88.375 41.508-29.959-9.466-60.192-1.6-89.709-37.791M533.697 856.435c7.609-4.767 10.884.483-1.125-6.217 29.567-17.416 58.317 11.909 87.784.459-18.984 7.508-59.734 22.283-86.659 5.758M533.547 866.445c-1.125 8.867 5.084 9.5-6.208 1.633-3.383 33.809 35.725 47.017 37.75 78.209-1.158-20.175-4.942-62.809-31.542-79.842M703.847 957.837c-21.625-6.209-64.683-14.859-81.958-50.217 10.775 6.767 11.558 10.308 2.567-2.5 32.05-1.583 49.016 51.217 79.391 52.717M647.757 955.793c-26.983-13.258-64.55-32.083-76.691-65.108 11.325 4.633 13.166 8.825 3.8-1.208 34.666 4.65 40.283 57.108 72.891 66.316"
                fill="#f6b484"
                fillRule="nonzero"
            />
            <path
                d="M18.2 672.898v31.536l35.808-37.315c1.633-1.76 3.141-3.141 4.398-4.02 1.13-.88 2.764-1.257 4.774-1.257 2.638 0 4.774.754 6.408 2.261 1.507 1.508 2.387 3.392 2.387 5.654 0 2.638-1.382 5.277-4.146 7.915l-22.113 20.982 25.505 36.561c1.759 2.513 3.14 4.775 4.02 6.66.88 1.884 1.382 3.769 1.382 5.528 0 2.01-.753 3.769-2.387 5.276-1.507 1.382-3.643 2.136-6.407 2.136-2.513 0-4.523-.502-6.157-1.633-1.633-1.005-3.015-2.513-4.02-4.272-1.131-1.759-2.136-3.518-3.016-4.9l-21.484-33.169L18.2 725.164v18.595c0 3.77-.88 6.533-2.513 8.292-1.759 1.885-4.02 2.764-6.659 2.764-1.508 0-3.015-.377-4.523-1.256a8.174 8.174 0 01-3.267-3.267c-.628-1.13-.88-2.513-1.005-4.02a77.8 77.8 0 01-.251-6.534v-66.84c0-3.644.88-6.408 2.387-8.292 1.633-1.885 3.895-2.764 6.659-2.764s4.9.88 6.659 2.764c1.633 1.759 2.513 4.523 2.513 8.292zM117.367 714.862h-6.408v28.897c0 3.77-.879 6.533-2.512 8.418-1.634 1.759-3.895 2.638-6.534 2.638-2.89 0-5.15-.88-6.784-2.764-1.633-1.884-2.387-4.648-2.387-8.292v-69.228c0-3.895.88-6.784 2.638-8.543 1.76-1.76 4.649-2.639 8.544-2.639h29.65c4.021 0 7.54.252 10.429.503 2.89.377 5.528 1.13 7.915 2.136 2.764 1.256 5.277 2.89 7.413 5.151 2.261 2.136 3.895 4.774 5.025 7.664 1.131 2.89 1.634 6.03 1.634 9.297 0 6.66-1.885 12.062-5.654 16.082-3.77 4.02-9.549 6.785-17.213 8.544 3.267 1.633 6.282 4.272 9.298 7.538 2.89 3.393 5.528 6.91 7.915 10.805 2.262 3.77 4.02 7.162 5.277 10.177 1.382 3.016 2.01 5.151 2.01 6.282 0 1.257-.377 2.387-1.13 3.518-.754 1.13-1.76 2.136-3.142 2.764-1.256.754-2.764 1.005-4.523 1.005-2.01 0-3.769-.502-5.15-1.382a16.703 16.703 0 01-3.644-3.643c-1.006-1.508-2.262-3.644-4.021-6.534l-7.287-12.187c-2.639-4.397-5.026-7.79-7.036-10.177-2.01-2.261-4.146-3.894-6.282-4.774-2.136-.88-4.774-1.256-8.04-1.256zm10.428-37.818H110.96v24.751h16.334c4.397 0 8.04-.377 11.056-1.13 3.015-.754 5.277-2.01 6.785-3.895 1.633-1.76 2.387-4.272 2.387-7.539 0-2.513-.628-4.648-1.885-6.533-1.256-1.885-3.015-3.392-5.277-4.272-2.136-.88-6.282-1.382-12.564-1.382zM242.53 677.421h-41.085v22.113h37.818c2.764 0 4.9.628 6.156 1.884 1.382 1.257 2.136 2.89 2.136 4.9 0 2.01-.754 3.77-2.01 5.026-1.382 1.256-3.518 1.884-6.282 1.884h-37.818v25.631h42.466c2.89 0 5.026.628 6.534 2.01 1.382 1.257 2.136 3.016 2.136 5.277 0 2.136-.754 3.895-2.136 5.151-1.508 1.382-3.644 2.01-6.534 2.01H194.41c-4.02 0-6.784-.879-8.543-2.638-1.76-1.759-2.639-4.649-2.639-8.543V674.53c0-2.638.377-4.774 1.131-6.407.88-1.634 2.01-2.89 3.644-3.644 1.759-.754 3.769-1.13 6.407-1.13h48.12c2.89 0 5.026.628 6.408 2.01 1.508 1.256 2.136 2.89 2.136 5.025 0 2.136-.628 3.77-2.136 5.151-1.382 1.257-3.518 1.885-6.408 1.885zM324.57 743.13l-4.271-11.307h-36.562l-4.271 11.559c-1.76 4.523-3.141 7.538-4.272 9.046-1.256 1.633-3.141 2.387-5.905 2.387-2.262 0-4.272-.754-6.03-2.513-1.76-1.633-2.64-3.517-2.64-5.653 0-1.257.126-2.513.629-3.77.377-1.382 1.005-3.14 2.01-5.528l22.992-58.422c.628-1.634 1.382-3.644 2.387-6.031a32.354 32.354 0 012.89-5.905c1.005-1.508 2.387-2.764 4.146-3.77 1.634-.879 3.77-1.381 6.282-1.381 2.513 0 4.649.502 6.282 1.382 1.76 1.005 3.141 2.261 4.146 3.769a18.487 18.487 0 012.639 4.9c.754 1.759 1.633 4.02 2.764 6.91l23.495 58.046c1.884 4.397 2.764 7.664 2.764 9.674s-.88 4.02-2.639 5.654c-1.759 1.759-3.769 2.638-6.282 2.638-1.382 0-2.638-.251-3.643-.754-1.005-.502-1.885-1.13-2.639-2.01-.628-.88-1.382-2.261-2.261-4.146-.754-1.759-1.382-3.392-2.01-4.774zm-36.058-25.002h26.887l-13.57-37.063-13.317 37.063zM404.78 678.426h-19.851v65.333c0 3.77-.88 6.533-2.513 8.292-1.759 1.885-3.895 2.764-6.533 2.764-2.639 0-4.9-.88-6.66-2.764-1.633-1.759-2.512-4.648-2.512-8.292v-65.333H346.86c-3.141 0-5.403-.754-6.91-2.136-1.508-1.256-2.262-3.14-2.262-5.402s.754-4.146 2.387-5.528c1.508-1.257 3.77-2.01 6.785-2.01h57.92c3.14 0 5.528.753 7.036 2.135 1.507 1.382 2.261 3.141 2.261 5.403 0 2.261-.754 4.146-2.261 5.402-1.634 1.382-3.895 2.136-7.036 2.136zM425.631 743.759v-70.861c0-3.644.88-6.408 2.513-8.292 1.633-1.885 3.895-2.764 6.533-2.764 2.764 0 4.9.88 6.66 2.764 1.632 1.759 2.512 4.523 2.512 8.292v70.861c0 3.644-.88 6.533-2.513 8.292-1.759 1.885-3.895 2.764-6.659 2.764-2.638 0-4.774-.88-6.533-2.764-1.633-1.884-2.513-4.648-2.513-8.292zM477.525 673.777l20.354 60.308 20.48-60.684c1.004-3.267 1.884-5.403 2.386-6.66.503-1.256 1.382-2.387 2.639-3.392 1.256-1.005 2.89-1.507 5.025-1.507 1.508 0 3.016.377 4.272 1.13 1.382.754 2.387 1.885 3.141 3.141.754 1.257 1.13 2.513 1.13 3.895 0 .88-.125 1.885-.376 2.89-.251 1.005-.503 2.136-.88 3.141-.376.88-.753 2.01-1.13 3.015l-21.736 58.8c-.754 2.261-1.633 4.397-2.387 6.408-.754 2.01-1.633 3.769-2.639 5.276-1.005 1.634-2.387 2.89-4.146 3.77-1.633 1.005-3.769 1.507-6.156 1.507-2.513 0-4.523-.502-6.282-1.382-1.633-1.005-3.015-2.261-4.146-3.895-1.005-1.507-1.885-3.266-2.639-5.276-.753-2.01-1.633-4.147-2.387-6.408l-21.359-58.297c-.377-1.005-.753-2.136-1.13-3.141-.377-1.005-.754-2.136-1.005-3.267-.252-1.256-.377-2.261-.377-3.015 0-2.136.753-4.02 2.512-5.78 1.634-1.633 3.77-2.512 6.282-2.512 3.141 0 5.277 1.005 6.66 2.89 1.256 1.884 2.512 4.9 3.894 9.045z"
                fill="#da7817"
                fillRule="nonzero"
            />
            <path
                d="M649.396 664.69a35.73 35.73 0 00-2.086-2.73 35.985 35.985 0 00-9.142-7.788c-3.88-2.346-8.3-3.991-13.249-4.826-3.799-.641-8.287-.991-13.468-.991h-29.14c-8.537 0-14.4 2.84-18.22 6.66-3.79 3.792-6.66 9.689-6.66 18.342v67.606c0 8.384 2.71 14.209 6.371 18.048 3.768 3.949 9.701 6.954 18.508 6.954h27.484c5.436 0 10.191-.286 14.267-.825 4.89-.646 9.205-1.8 12.97-3.374l.23-.098c5.067-2.226 9.374-5.344 12.917-9.353 1.091 3.157 2.705 5.76 4.637 7.88 4.388 4.81 9.928 7.304 16.695 7.304 6.963 0 12.515-2.541 16.828-7.217a21.712 21.712 0 003.001-4.147 20.703 20.703 0 002.507 3.082c3.804 3.848 9.718 6.748 18.4 6.748h49.507c6.921 0 11.964-2.217 15.547-5.384 4.062 4.386 9.497 6.918 16.6 6.918 6.897 0 12.402-2.505 16.686-7.104 3.612-3.875 6.23-9.646 6.23-17.837v-8.845c.627.98 1.28 2.053 1.96 3.213l.072.122 7.301 12.147c1.89 3.149 3.395 5.536 4.5 7.16 1.994 2.93 4.393 5.335 7.161 7.248 3.531 2.44 7.826 3.896 13.02 3.896 4.127 0 7.736-.93 10.881-2.551 3.548-1.83 6.312-4.365 8.363-7.525 2.361-3.637 3.366-7.361 3.366-11.062 0-2.1-.663-6.09-3.025-11.676-1.517-3.587-3.615-7.617-6.335-12.07a88.858 88.858 0 00-4.866-7.163 34.073 34.073 0 003.181-2.966c6.051-6.41 9.45-14.844 9.45-25.571 0-5.021-.884-9.773-2.61-14.261-1.815-4.72-4.479-8.86-7.978-12.424a36.437 36.437 0 00-11.842-8.09c-3.438-1.55-7.364-2.643-11.725-3.165-3.359-.402-7.404-.62-12.135-.62h-29.63c-8.577 0-14.472 2.85-18.313 6.69l-.157.16a22.652 22.652 0 00-1.31-1.3c-3.5-3.193-8.603-5.55-15.803-5.55h-48.097c-4.926 0-8.932.94-12.098 2.386-3.699 1.69-6.633 4.16-8.797 7.42a21.61 21.61 0 00-3.064-4.21c-4.3-4.611-9.833-7.13-16.776-7.13-6.866 0-12.4 2.526-16.73 7.279-2.443 2.68-4.384 6.164-5.384 10.59zm121.526 57.11a19.923 19.923 0 01-4.364 2.405 23.42 23.42 0 014.364 1.167V721.8zm0-33.841a16.94 16.94 0 01-.546.238c.186.124.367.25.546.38v-.618z"
                fill="#444"
            />
            <path
                d="M611.223 750.22h-27.515c-4.02 0-6.785-.879-8.544-2.638-1.633-1.759-2.512-4.649-2.512-8.543v-67.595c0-4.02.88-6.784 2.638-8.543 1.76-1.76 4.523-2.639 8.418-2.639h29.148c4.272 0 8.041.252 11.182.88 3.141.502 5.906 1.508 8.418 3.015 2.136 1.257 4.02 2.89 5.654 4.775 1.633 2.01 2.89 4.146 3.77 6.533.879 2.261 1.256 4.774 1.256 7.413 0 8.92-4.523 15.579-13.444 19.725 11.81 3.77 17.715 11.056 17.715 21.987 0 5.026-1.256 9.549-3.894 13.57-2.513 4.02-6.031 7.035-10.428 8.92a34.501 34.501 0 01-9.423 2.387c-3.518.502-7.665.754-12.439.754zm-1.382-39.953H590.87v26.259h19.6c12.313 0 18.47-4.398 18.47-13.318 0-4.523-1.634-7.79-4.775-9.8-3.267-2.136-7.915-3.14-14.323-3.14zm-18.972-36.31v23.244h16.71c4.524 0 8.042-.377 10.554-1.257 2.388-.88 4.272-2.513 5.654-4.9 1.005-1.759 1.508-3.643 1.508-5.78 0-4.522-1.633-7.538-4.774-9.045-3.267-1.508-8.167-2.262-14.826-2.262h-14.826zM663.891 740.672v-70.861c0-3.644.88-6.408 2.513-8.292 1.633-1.885 3.895-2.764 6.533-2.764 2.764 0 4.9.88 6.66 2.764 1.632 1.759 2.512 4.523 2.512 8.292v70.861c0 3.644-.88 6.533-2.513 8.292-1.759 1.885-3.895 2.764-6.659 2.764-2.638 0-4.774-.88-6.533-2.764-1.633-1.884-2.513-4.648-2.513-8.292zM761.77 674.334h-41.085v22.113h37.818c2.764 0 4.9.628 6.156 1.884 1.382 1.257 2.136 2.89 2.136 4.9 0 2.01-.754 3.77-2.01 5.026-1.382 1.256-3.518 1.884-6.282 1.884h-37.818v25.631h42.466c2.89 0 5.026.628 6.534 2.01 1.382 1.257 2.136 3.016 2.136 5.277 0 2.136-.754 3.895-2.136 5.151-1.508 1.382-3.644 2.01-6.534 2.01H713.65c-4.02 0-6.784-.879-8.543-2.638-1.76-1.759-2.639-4.649-2.639-8.543v-67.595c0-2.638.377-4.774 1.131-6.407.88-1.634 2.01-2.89 3.644-3.644 1.759-.754 3.769-1.13 6.407-1.13h48.12c2.89 0 5.026.628 6.408 2.01 1.508 1.256 2.136 2.89 2.136 5.025 0 2.136-.628 3.77-2.136 5.151-1.382 1.257-3.518 1.885-6.408 1.885zM810.767 711.775h-6.408v28.897c0 3.77-.879 6.533-2.512 8.418-1.634 1.759-3.895 2.638-6.534 2.638-2.89 0-5.15-.88-6.784-2.764-1.633-1.884-2.387-4.648-2.387-8.292v-69.228c0-3.895.88-6.784 2.638-8.543 1.76-1.76 4.649-2.639 8.544-2.639h29.65c4.021 0 7.54.252 10.429.503 2.89.377 5.528 1.13 7.915 2.136 2.764 1.256 5.277 2.89 7.413 5.151 2.261 2.136 3.895 4.774 5.025 7.664 1.131 2.89 1.634 6.03 1.634 9.297 0 6.66-1.885 12.062-5.654 16.082-3.77 4.02-9.549 6.785-17.213 8.544 3.267 1.633 6.282 4.272 9.298 7.538 2.89 3.393 5.528 6.91 7.915 10.805 2.262 3.77 4.02 7.162 5.277 10.177 1.382 3.016 2.01 5.151 2.01 6.282 0 1.257-.377 2.387-1.13 3.518-.754 1.13-1.76 2.136-3.142 2.764-1.256.754-2.764 1.005-4.523 1.005-2.01 0-3.769-.502-5.15-1.382a16.703 16.703 0 01-3.644-3.643c-1.006-1.508-2.262-3.644-4.021-6.534l-7.287-12.187c-2.639-4.397-5.026-7.79-7.036-10.177-2.01-2.261-4.146-3.894-6.282-4.774-2.136-.88-4.774-1.256-8.04-1.256zm10.428-37.818H804.36v24.751h16.334c4.397 0 8.04-.377 11.056-1.13 3.015-.754 5.277-2.01 6.785-3.895 1.633-1.76 2.387-4.272 2.387-7.539 0-2.513-.628-4.648-1.885-6.533-1.256-1.885-3.015-3.392-5.277-4.272-2.136-.88-6.282-1.382-12.564-1.382z"
                fill="#fff"
                fillRule="nonzero"
            />
            <path
                d="M895.233 753.815c-2.513 0-4.649-.754-6.533-2.387-1.885-1.633-2.764-4.02-2.764-6.91 0-2.513.879-4.649 2.638-6.408 1.759-1.884 3.895-2.764 6.533-2.764 2.513 0 4.775.88 6.534 2.639 1.884 1.884 2.764 4.02 2.764 6.533 0 2.89-.88 5.151-2.764 6.784-1.76 1.76-3.895 2.513-6.408 2.513zM969.355 744.267v-1.634c-2.261 2.513-4.397 4.649-6.659 6.282-2.136 1.634-4.523 2.89-7.161 3.644-2.513.88-5.277 1.256-8.292 1.256-4.021 0-7.79-.88-11.182-2.513-3.393-1.758-6.408-4.146-8.795-7.287-2.513-3.14-4.398-6.784-5.78-11.056-1.256-4.272-1.884-8.92-1.884-13.82 0-10.428 2.513-18.595 7.664-24.5 5.151-5.905 11.81-8.795 20.228-8.795 4.774 0 8.92.88 12.187 2.513 3.267 1.633 6.533 4.146 9.674 7.664V671.27c0-3.392.754-6.03 2.01-7.79 1.382-1.759 3.393-2.638 5.905-2.638 2.513 0 4.524.754 5.906 2.387 1.382 1.633 2.01 4.02 2.01 7.161v73.877c0 3.14-.754 5.528-2.262 7.161-1.382 1.633-3.266 2.387-5.654 2.387-2.261 0-4.146-.754-5.653-2.513-1.508-1.633-2.262-4.02-2.262-7.035zm-32.918-24.626c0 4.523.629 8.418 2.136 11.685 1.382 3.14 3.267 5.528 5.78 7.161 2.387 1.634 5.151 2.387 8.04 2.387 2.89 0 5.655-.753 8.042-2.261 2.387-1.508 4.397-3.895 5.78-7.036 1.507-3.267 2.26-7.161 2.26-11.936 0-4.397-.753-8.292-2.26-11.433-1.383-3.267-3.393-5.654-5.78-7.413-2.513-1.633-5.277-2.513-8.167-2.513-3.14 0-5.78.88-8.292 2.639-2.387 1.633-4.272 4.146-5.528 7.413-1.382 3.266-2.01 7.035-2.01 11.307zM1048.755 723.913h-32.792c.125 3.77.88 7.161 2.261 10.051 1.508 2.89 3.518 5.151 6.03 6.533 2.514 1.508 5.152 2.262 8.167 2.262 2.01 0 3.895-.251 5.529-.754 1.633-.502 3.266-1.13 4.774-2.136 1.508-1.005 3.015-2.136 4.272-3.266 1.382-1.131 3.015-2.639 5.15-4.65.88-.753 2.011-1.13 3.644-1.13 1.76 0 3.141.503 4.147 1.382 1.13 1.005 1.633 2.262 1.633 4.02 0 1.508-.628 3.267-1.759 5.278-1.256 2.01-3.015 4.02-5.403 5.905-2.387 1.884-5.402 3.392-9.046 4.648-3.643 1.131-7.79 1.76-12.438 1.76-10.805 0-19.097-3.016-25.128-9.172-5.905-6.157-8.92-14.449-8.92-25.003 0-4.9.753-9.548 2.261-13.695 1.382-4.271 3.518-7.915 6.408-10.93 2.764-3.016 6.282-5.403 10.428-6.91 4.146-1.634 8.669-2.513 13.695-2.513 6.533 0 12.187 1.382 16.835 4.146 4.649 2.764 8.167 6.408 10.554 10.68 2.387 4.397 3.518 8.92 3.518 13.443 0 4.146-1.256 6.91-3.644 8.166-2.387 1.257-5.779 1.885-10.176 1.885zm-32.792-9.549h30.404c-.376-5.653-2.01-9.925-4.648-12.815-2.639-2.89-6.157-4.272-10.554-4.272-4.146 0-7.664 1.382-10.302 4.272-2.639 2.89-4.272 7.162-4.9 12.815z"
                fill="#da7817"
                fillRule="nonzero"
            />
        </svg>
    )
}

export default Logo
