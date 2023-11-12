'use client'
import style from './_partner.module.scss';
import Image from 'next/image';
import Rectangle7 from './../../../public/img/Rectangle 7.png'

const Partner = () => {
    return(
        <section className={style.partner}>
            <div className="container">
                <div className={style.cards}>
                    <div className={style.col5}>
                        <div className={style.image}>
                            <Image src={Rectangle7} width={431} height={521} alt='sekil'/>
                        </div>
                    </div>
                    <div className={style.col7}>
                        <div className={style.content}>
                            <h3>We are your partner in creating a legacy building facade.</h3>
                            <p>Ac, sit tincidunt commodo tincidunt. Mattis metus purus quam fames in vitae fringilla tempor. Non in in sodales suspendisse egestas integer iaculis semper ultrices. Lectus dui in pulvinar orci ut fermentum tortor mi, at. In adipiscing arcu, consectetur lacus eu.</p>
                            <p>Non, augue integer augue accumsan ante. Ultricies libero condimentum amet, enim sit neque nascetur mollis cursus. Pellentesque tincidunt libero, in pharetra, nunc. Tincidunt egestas amet tincidunt consequat in sed arcu turpis neque.</p>
                            <p>Nam elementum aliquet integer sit condimentum sed. Pulvinar aliquam nascetur maecenas risus vestibulum eu. Pellentesque non molestie est mauris tristique pretium. Congue ac et neque vulputate et morbi gravida. </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Partner;