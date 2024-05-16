import styles from "./EmailVerify.module.css"

function EmailVerify(){
     return(
        <div className={styles.container +' '+ "grid grid-cols-7 grid-rows-7"}>
            <div className="col-start-2 col-span-5 row-start-2 row-span-5 bg-white h-full bg-opacity-60 rounded-lg m-5 grid grid-rows-5 grid-cols-5">
                <div className='lg:items-center lg:col-start-4 lg:col-span-3 lg:row-start-2 lg:row-span-3 col-start-2 col-span-3'>
                    <img className ="" src='../src/assets/thankyoudribble.gif'></img>
                </div>
                <div className="lg:col-start-2 lg:col-span-2 lg:row-start-2 text-center lg:mt-24 md:mt-24 mt-28 md:col-start-2 md:col-span-3 md:row-start-3 col-start-1 col-span-5 row-start-2 m-5 text-lg font-bold">
                    <div class="max-w-sm space-y-3">
                        <p classNmae="lg:scale-100 md:scale-100 scale-75">برای تایید ایمیل خود کد ۵ رقمی ارسالی را وارد کنید!</p>
{/*                         <input type="text" maxlength="1" class="lg:scale-100 md:scale-100 scale-75 lg:mr-2 md:mr-2  text-center py-2 lg:w-10 md:w-10 w-8 inline border-template-custom-blue rounded-lg text-sm focus:border-template-custom-orange focus:ring-template-custom-orange disabled:opacity-150 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"/>
                        <input type="text" maxlength="1" class="lg:scale-100 md:scale-100 scale-75 lg:mr-2 md:mr-2  text-center py-2 lg:w-10 md:w-10 w-8 inline border-template-custom-blue rounded-lg text-sm focus:border-template-custom-orange focus:ring-template-custom-orange disabled:opacity-150 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"/>
                        <input type="text" maxlength="1" class="lg:scale-100 md:scale-100 scale-75 lg:mr-2 md:mr-2  text-center py-2 lg:w-10 md:w-10 w-8 inline border-template-custom-blue rounded-lg text-sm focus:border-template-custom-orange focus:ring-template-custom-orange disabled:opacity-150 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"/>
                        <input type="text" maxlength="1" class="lg:scale-100 md:scale-100 scale-75 lg:mr-2 md:mr-2  text-center py-2 lg:w-10 md:w-10 w-8 inline border-template-custom-blue rounded-lg text-sm focus:border-template-custom-orange focus:ring-template-custom-orange disabled:opacity-150 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"/>
                        <input type="text" maxlength="1" class="lg:scale-100 md:scale-100 scale-75 lg:mr-2 md:mr-2  text-center py-2 lg:w-10 md:w-10 w-8 inline border-template-custom-blue rounded-lg text-sm focus:border-template-custom-orange focus:ring-template-custom-orange disabled:opacity-150 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"/>
                         */}
                        <input type="text" maxlength="5" class="lg:scale-100 md:scale-100 scale-75 text-center py-2 lg:w-48 md:w-48 w-32 inline border-template-custom-blue rounded-lg text-sm focus:border-template-custom-orange focus:ring-template-custom-orange disabled:opacity-150 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"/>
                         <br/>
                        <button className={styles.button_sign+" "+"text-center  lg:scale-90 md:scale-90 scale-75"}>ثبت کد</button>
                        <br/>
                        <button className="dfad text-template-custom-blue hover:text-template-custom-orange">ارسال مجدد</button>
                    </div>
                </div>
            </div>
        </div>
     )
}
export default EmailVerify;