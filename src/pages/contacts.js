import React from "react";
import styles from './contacts.module.scss'
import Layout from "../components/layout";
import contacts from '../data/contacts.json'

const Contacts = () => {
  console.log(contacts.team)
  return (
<Layout>
        <div className={styles.body}>
          <h1 className={styles.eventhead}>Contact Us</h1>
          <p className={styles.sectionHead}>Where to find us?</p>
    
          <div className={styles.clubDetails}>
            <div class="vertical-center">
              <p className={styles.eventtitle}>DOT COM CLUB</p>
              <p class="eventdesc">
                <span>Mail us</span><br/> your queries at
                <br />
                @jhccyberstrike.com
              </p>
              <p class="eventdesc">
              <span>Find us</span><br/>
                Jai Hind College <br />
                "A" Road, Churchgate <br />
                Mumbai, Maharashtra 400 020
              </p>
            </div>
          </div>
    
          <p className={styles.sectionHead}>For enquiries contact</p>
          <div className={styles.contactCard}>
            {contacts.team.map(({name,head,contact})=>(
              <div className={styles.card}>
              <p className={styles.name}>
              {name.split(' ')[0]}<br/><b>{name.split(' ')[1]}</b>
              </p>
              <p className={styles.head}>{head}</p>
              <p className={styles.contact}>{contact}</p>
              </div>
            ))}
          </div>
    
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3773.9295846753625!2d72.82302181446536!3d18.934510687169272!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7d1e71c2b104b%3A0x2b32a4be81621938!2sJai+Hind+College!5e0!3m2!1sen!2sin!4v1480503248783"
              width="100%"
              height="450px"
              frameborder="0"
              allowfullscreen
              style={{width:'95vw', borderRadius:'1%', overflow:'hidden', display:'block'}}
            />
        </div>
</Layout>
  );
};

export default Contacts;
