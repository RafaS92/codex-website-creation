import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      nav: {
        home: 'Home',
        about: 'About',
        services: 'Services',
        retreats: 'Retreats & Workshops',
        events: 'Events',
        reiki: 'Reiki Training',
        faq: 'FAQ',
        contact: 'Contact',
        cta: 'Inquire',
      },
      meta: {
        title: 'Nongnapat Neuman | Holistic Healing',
        description:
          'Grounded holistic healing, Reiki training, retreats, and nature-based restoration in Northern Thailand.',
      },
      site: {
        name: 'Nongnapat Neuman',
        location: 'Chiang Dao / Northern Thailand',
        email: 'hello@example.com',
        whatsapp: 'WhatsApp',
      },
      common: {
        learnMore: 'Learn more',
        inquire: 'Inquire',
        askSession: 'Ask about a session',
        askRetreat: 'Ask about retreats',
        askReiki: 'Ask about Reiki training',
        contactIntro:
          'Reach out with a question, a private session inquiry, or interest in a retreat or training. There is no pressure to know exactly what you need before beginning the conversation.',
      },
      home: {
        heroEyebrow: 'Holistic healing in nature',
        heroTitle: 'A grounded place to rest, reconnect, and return to yourself.',
        heroBody:
          'Nongnapat Neuman offers in-person holistic healing, somatic therapies, energy work, sound healing, mindfulness, retreats, and Reiki training rooted in more than 20 years of practice.',
        heroCta: 'Begin with an inquiry',
        heroSecondary: 'Explore services',
        philosophyTitle: 'Healing that listens to the whole person',
        philosophyBody:
          'The practice integrates Eastern and Western perspectives, body-based awareness, energy work, sound, mindfulness, and the steady intelligence of nature. Each experience is held with calm professionalism and deep respect for personal pace.',
        pathwaysTitle: 'Choose the path that meets you now',
        settingTitle: 'A natural setting for nervous system ease',
        settingBody:
          'The experience is shaped by stillness, landscape, and an unhurried sense of arrival. Place is part of the care: a quiet environment that supports grounding before, during, and after the work.',
        aboutTitle: 'Twenty years of grounded practice',
        aboutBody:
          'Nongnapat brings mature presence, high-quality care, and an authentic healing approach to people seeking balance physically, emotionally, and energetically.',
        expectTitle: 'What visitors should feel before they arrive',
        expectItems: [
          'Clear about the available healing paths',
          'Reassured by the experience and professionalism',
          'Free to reach out gently, without pressure',
        ],
      },
      pathways: [
        {
          title: 'Private Sessions',
          body: 'Personal healing experiences for rest, reconnection, nervous system balance, and emotional grounding.',
          link: '/services',
          action: 'View services',
        },
        {
          title: 'Retreats & Workshops',
          body: 'In-person experiences for travelers, groups, and people seeking deeper restoration in a nature-based setting.',
          link: '/retreats-workshops',
          action: 'Explore retreats',
        },
        {
          title: 'Reiki Training',
          body: 'Authentic Reiki education and integrative healing workshops for students and practitioners.',
          link: '/reiki-training',
          action: 'Learn about training',
        },
      ],
      services: {
        title: 'Private healing sessions',
        intro:
          'Sessions are designed for people seeking deep rest, balance, emotional steadiness, and reconnection with the body, mind, and energy system.',
        whoTitle: 'Who this work supports',
        whoBody:
          'This work may support people experiencing stress, burnout, emotional overwhelm, nervous system imbalance, or a quiet desire to slow down and reconnect.',
        expectTitle: 'What to expect',
        expectBody:
          'A calm, respectful process that meets each person at their own pace. Details can be clarified through a simple inquiry before booking.',
        modalities: [
          {
            title: 'Holistic Healing',
            body: 'Whole-person support that considers physical, emotional, energetic, and environmental dimensions.',
          },
          {
            title: 'Energy Work',
            body: 'Gentle energetic practices intended to support balance, clarity, and deeper ease.',
          },
          {
            title: 'Somatic Therapies',
            body: 'Body-based awareness practices for grounding, regulation, and reconnection.',
          },
          {
            title: 'Sound Healing',
            body: 'Restorative sound experiences that invite quiet, presence, and release.',
          },
          {
            title: 'Nature-Based Healing',
            body: 'Healing supported by landscape, stillness, and the sensory intelligence of place.',
          },
          {
            title: 'Mindfulness',
            body: 'Simple awareness practices that help visitors slow down and meet themselves with steadiness.',
          },
        ],
      },
      about: {
        title: 'About Nongnapat',
        intro:
          'Nongnapat Neuman is a holistic healing practitioner with more than 20 years of experience supporting people seeking deep rest, balance, and reconnection.',
        philosophy:
          'Her approach is calm, grounded, and integrative, weaving Eastern and Western perspectives with energy work, somatic awareness, mindfulness, sound, and nature-based care.',
        valuesTitle: 'The practice is guided by',
        values: ['Safety', 'Presence', 'Grounding', 'Professional care', 'Nature connection'],
      },
      retreats: {
        title: 'Retreats & workshops',
        intro:
          'Retreats and workshops offer more immersive ways to experience healing, mindfulness, sound, and nature-based restoration.',
        formatsTitle: 'Possible formats',
        formats: ['Private restorative experiences', 'Group workshops', 'Nature-based healing days', 'Sound and mindfulness sessions', 'Integrative healing programs'],
        note:
          'Specific dates and program details can be shared through inquiry as offerings become available.',
      },
      events: {
        title: 'Events',
        intro:
          'Gatherings, seasonal circles, and special healing days for people who want to experience the work in community.',
        imageAlt: 'People gathered for a warm community event',
        featuredTitle: 'Upcoming events',
        note:
          'Dates, themes, and formats are published here as new gatherings are confirmed.',
        loading: 'Loading upcoming events...',
        empty: 'No upcoming events are published yet.',
        error: 'Events could not be loaded right now. Please check back soon.',
        action: 'Ask about events',
        items: [
          {
            title: 'Full Moon Sound Evening',
            body: 'A relaxed evening of sound, stillness, tea, and gentle reflection under the moonlight.',
          },
          {
            title: 'Forest Mindfulness Morning',
            body: 'A small-group morning with mindful walking, breath practice, and quiet time in nature.',
          },
          {
            title: 'Community Healing Day',
            body: 'A welcoming open-format day with mini sessions, shared grounding practices, and simple conversation.',
          },
        ],
      },
      reiki: {
        title: 'Reiki training',
        intro:
          'Reiki training is for students, practitioners, and conscious learners interested in authentic energy work and integrative healing practice.',
        approachTitle: 'Training approach',
        approach:
          'The training should feel serious, welcoming, and grounded in practice. Program levels, dates, and readiness details can be clarified through inquiry.',
        students: ['Curious beginners', 'Healing practitioners', 'Wellness professionals', 'Students seeking authentic Reiki education'],
      },
      faq: {
        title: 'Frequently asked questions',
        intro:
          'These questions help visitors understand the experience before reaching out. More specific details can be discussed directly.',
        groups: [
          {
            title: 'Private sessions',
            items: [
              {
                q: 'Is this work right for me?',
                a: 'It may be a fit if you are seeking rest, balance, emotional grounding, or reconnection. A simple inquiry can help clarify the best next step.',
              },
              {
                q: 'Do I need experience with energy work?',
                a: 'No. The experience can meet beginners and experienced practitioners with the same calm, respectful pace.',
              },
            ],
          },
          {
            title: 'Retreats and workshops',
            items: [
              {
                q: 'Are retreats private or group-based?',
                a: 'Offerings may vary. The current site treats retreats and workshops as inquiry-based until specific dates and formats are confirmed.',
              },
            ],
          },
          {
            title: 'Booking and contact',
            items: [
              {
                q: 'How should I reach out?',
                a: 'You can begin through the contact form, WhatsApp, or email. A short message about your interest is enough.',
              },
              {
                q: 'Where is the practice located?',
                a: 'The discovery materials reference Chiang Dao / Northern Thailand. Exact location details should be confirmed before publishing.',
              },
            ],
          },
        ],
      },
      contact: {
        title: 'Begin with a simple inquiry',
        name: 'Name',
        email: 'Email or WhatsApp',
        interest: 'Area of interest',
        message: 'Message',
        submit: 'Send inquiry',
        success: 'Thank you. This demo form is ready for a future email or booking integration.',
        options: ['Private session', 'Retreat or workshop', 'Reiki training', 'General question'],
      },
    },
  },
  th: {
    translation: {
      nav: {
        home: 'หน้าแรก',
        about: 'เกี่ยวกับ',
        services: 'บริการ',
        retreats: 'รีทรีตและเวิร์กช็อป',
        events: 'อีเวนต์',
        reiki: 'อบรมเรกิ',
        faq: 'คำถามที่พบบ่อย',
        contact: 'ติดต่อ',
        cta: 'สอบถาม',
      },
      meta: {
        title: 'Nongnapat Neuman | การเยียวยาแบบองค์รวม',
        description:
          'การเยียวยาแบบองค์รวม อบรมเรกิ รีทรีต และการฟื้นฟูผ่านธรรมชาติในภาคเหนือของประเทศไทย',
      },
      site: {
        name: 'Nongnapat Neuman',
        location: 'เชียงดาว / ภาคเหนือของประเทศไทย',
        email: 'hello@example.com',
        whatsapp: 'WhatsApp',
      },
      common: {
        learnMore: 'ดูเพิ่มเติม',
        inquire: 'สอบถาม',
        askSession: 'สอบถามเซสชัน',
        askRetreat: 'สอบถามรีทรีต',
        askReiki: 'สอบถามการอบรมเรกิ',
        contactIntro:
          'ส่งข้อความเพื่อถามข้อมูล นัดหมายเซสชันส่วนตัว หรือสอบถามรีทรีตและการอบรมได้อย่างสบายใจ ไม่จำเป็นต้องรู้คำตอบทั้งหมดก่อนเริ่มต้นบทสนทนา',
      },
      home: {
        heroEyebrow: 'การเยียวยาแบบองค์รวมท่ามกลางธรรมชาติ',
        heroTitle: 'พื้นที่สงบเพื่อพัก ฟื้นใจ และกลับมาเชื่อมต่อกับตัวเอง',
        heroBody:
          'Nongnapat Neuman ให้บริการการเยียวยาแบบองค์รวมแบบพบตัวจริง การบำบัดเชิงกาย จิตพลัง เสียงบำบัด สติ รีทรีต และการอบรมเรกิ จากประสบการณ์กว่า 20 ปี',
        heroCta: 'เริ่มต้นสอบถาม',
        heroSecondary: 'ดูบริการ',
        philosophyTitle: 'การเยียวยาที่รับฟังทั้งชีวิตของคนคนหนึ่ง',
        philosophyBody:
          'แนวทางนี้ผสานมุมมองตะวันออกและตะวันตก การรับรู้ผ่านร่างกาย พลังงาน เสียง สติ และภูมิปัญญาของธรรมชาติ ทุกประสบการณ์ถูกดูแลด้วยความสงบ มืออาชีพ และเคารพจังหวะของแต่ละคน',
        pathwaysTitle: 'เลือกเส้นทางที่เหมาะกับคุณในตอนนี้',
        settingTitle: 'พื้นที่ธรรมชาติที่ช่วยให้ระบบประสาทผ่อนคลาย',
        settingBody:
          'ประสบการณ์นี้ถูกหล่อหลอมจากความนิ่ง ภูมิทัศน์ และจังหวะที่ไม่เร่งรีบ สถานที่เป็นส่วนหนึ่งของการดูแล ช่วยให้เกิดความมั่นคงก่อน ระหว่าง และหลังการเยียวยา',
        aboutTitle: 'ประสบการณ์ที่มั่นคงมากกว่า 20 ปี',
        aboutBody:
          'นงนภัสนำความนิ่ง ความเอาใจใส่คุณภาพสูง และแนวทางการเยียวยาที่จริงแท้มาสู่ผู้ที่ต้องการความสมดุลทั้งกาย ใจ และพลังงาน',
        expectTitle: 'สิ่งที่ผู้มาเยือนควรรู้สึกก่อนมาถึง',
        expectItems: ['เข้าใจเส้นทางการเยียวยาที่มีอยู่', 'มั่นใจในประสบการณ์และความเป็นมืออาชีพ', 'ติดต่อได้อย่างสบายใจโดยไม่รู้สึกกดดัน'],
      },
      pathways: [
        {
          title: 'เซสชันส่วนตัว',
          body: 'ประสบการณ์การเยียวยาส่วนบุคคลเพื่อการพัก การเชื่อมต่อ ความสมดุลของระบบประสาท และความมั่นคงทางใจ',
          link: '/services',
          action: 'ดูบริการ',
        },
        {
          title: 'รีทรีตและเวิร์กช็อป',
          body: 'ประสบการณ์แบบพบตัวจริงสำหรับนักเดินทาง กลุ่ม และผู้ที่ต้องการการฟื้นฟูที่ลึกขึ้นในธรรมชาติ',
          link: '/retreats-workshops',
          action: 'ดูรีทรีต',
        },
        {
          title: 'การอบรมเรกิ',
          body: 'การเรียนรู้เรกิอย่างจริงแท้และเวิร์กช็อปการเยียวยาแบบบูรณาการสำหรับนักเรียนและผู้ปฏิบัติงาน',
          link: '/reiki-training',
          action: 'ดูการอบรม',
        },
      ],
      services: {
        title: 'เซสชันการเยียวยาส่วนตัว',
        intro:
          'เซสชันเหมาะสำหรับผู้ที่ต้องการพักลึก ความสมดุล ความมั่นคงทางอารมณ์ และการเชื่อมต่อกับร่างกาย ใจ และระบบพลังงาน',
        whoTitle: 'งานนี้ช่วยสนับสนุนใคร',
        whoBody:
          'อาจเหมาะกับผู้ที่มีความเครียด เหนื่อยล้า อารมณ์ท่วมท้น ระบบประสาทเสียสมดุล หรือรู้สึกอยากช้าลงและกลับมาเชื่อมต่อกับตัวเอง',
        expectTitle: 'สิ่งที่คาดหวังได้',
        expectBody:
          'กระบวนการที่สงบ เคารพ และเดินไปตามจังหวะของแต่ละคน รายละเอียดสามารถพูดคุยผ่านการสอบถามก่อนนัดหมายได้',
        modalities: [
          { title: 'การเยียวยาแบบองค์รวม', body: 'การดูแลทั้งกาย ใจ พลังงาน และความสัมพันธ์กับสภาพแวดล้อม' },
          { title: 'งานพลังงาน', body: 'แนวทางที่อ่อนโยนเพื่อสนับสนุนความสมดุล ความชัดเจน และความผ่อนคลาย' },
          { title: 'การบำบัดเชิงกาย', body: 'การรับรู้ผ่านร่างกายเพื่อความมั่นคง การปรับระบบประสาท และการเชื่อมต่อ' },
          { title: 'เสียงบำบัด', body: 'ประสบการณ์ผ่านเสียงที่ชวนให้เกิดความนิ่ง การอยู่กับปัจจุบัน และการปล่อยวาง' },
          { title: 'การเยียวยาผ่านธรรมชาติ', body: 'การดูแลที่ได้รับการสนับสนุนจากภูมิทัศน์ ความนิ่ง และประสาทสัมผัสของสถานที่' },
          { title: 'สติ', body: 'การฝึกการรับรู้อย่างเรียบง่ายเพื่อช่วยให้ช้าลงและพบตัวเองด้วยความมั่นคง' },
        ],
      },
      about: {
        title: 'เกี่ยวกับ Nongnapat',
        intro:
          'Nongnapat Neuman เป็นผู้ปฏิบัติงานด้านการเยียวยาแบบองค์รวมที่มีประสบการณ์มากกว่า 20 ปี สนับสนุนผู้ที่ต้องการพักลึก ความสมดุล และการกลับมาเชื่อมต่อ',
        philosophy:
          'แนวทางของเธอสงบ มั่นคง และบูรณาการ ผสานมุมมองตะวันออกและตะวันตก งานพลังงาน การรับรู้ทางกาย สติ เสียง และการดูแลผ่านธรรมชาติ',
        valuesTitle: 'แนวทางการปฏิบัตินี้ตั้งอยู่บน',
        values: ['ความปลอดภัย', 'การอยู่กับปัจจุบัน', 'ความมั่นคง', 'การดูแลอย่างมืออาชีพ', 'การเชื่อมต่อกับธรรมชาติ'],
      },
      retreats: {
        title: 'รีทรีตและเวิร์กช็อป',
        intro:
          'รีทรีตและเวิร์กช็อปเป็นวิธีที่ลึกขึ้นในการสัมผัสการเยียวยา สติ เสียง และการฟื้นฟูผ่านธรรมชาติ',
        formatsTitle: 'รูปแบบที่เป็นไปได้',
        formats: ['ประสบการณ์ฟื้นฟูส่วนตัว', 'เวิร์กช็อปกลุ่ม', 'วันเยียวยาผ่านธรรมชาติ', 'เซสชันเสียงและสติ', 'โปรแกรมการเยียวยาแบบบูรณาการ'],
        note:
          'วันที่และรายละเอียดโปรแกรมสามารถสอบถามได้เมื่อมีการเปิดรับหรือจัดรูปแบบเฉพาะ',
      },
      events: {
        title: 'อีเวนต์',
        intro:
          'กิจกรรมรวมกลุ่ม วงสนทนาตามฤดูกาล และวันเยียวยาพิเศษสำหรับผู้ที่อยากสัมผัสงานนี้ร่วมกับชุมชน',
        imageAlt: 'ผู้คนรวมตัวกันในกิจกรรมชุมชนที่อบอุ่น',
        featuredTitle: 'อีเวนต์ที่กำลังจะมาถึง',
        note:
          'วันที่ ธีม และรูปแบบกิจกรรมจะเผยแพร่ที่นี่เมื่อมีการยืนยันกำหนดการใหม่',
        loading: 'กำลังโหลดอีเวนต์ที่กำลังจะมาถึง...',
        empty: 'ยังไม่มีอีเวนต์ที่เผยแพร่ในตอนนี้',
        error: 'ไม่สามารถโหลดอีเวนต์ได้ในตอนนี้ กรุณากลับมาตรวจสอบอีกครั้ง',
        action: 'สอบถามอีเวนต์',
        items: [
          {
            title: 'ค่ำคืนเสียงบำบัดวันพระจันทร์เต็มดวง',
            body: 'ช่วงเย็นสบาย ๆ กับเสียง ความนิ่ง ชา และการใคร่ครวญอย่างอ่อนโยนใต้แสงจันทร์',
          },
          {
            title: 'เช้าสติในป่า',
            body: 'กิจกรรมกลุ่มเล็กตอนเช้าพร้อมการเดินอย่างมีสติ การหายใจ และเวลาสงบในธรรมชาติ',
          },
          {
            title: 'วันเยียวยาชุมชน',
            body: 'วันเปิดรับอย่างเป็นกันเอง มีเซสชันสั้น ๆ การฝึกความมั่นคงร่วมกัน และบทสนทนาเรียบง่าย',
          },
        ],
      },
      reiki: {
        title: 'การอบรมเรกิ',
        intro:
          'การอบรมเรกิเหมาะสำหรับนักเรียน ผู้ปฏิบัติงาน และผู้เรียนรู้อย่างมีสติที่สนใจงานพลังงานและการเยียวยาแบบบูรณาการ',
        approachTitle: 'แนวทางการอบรม',
        approach:
          'การอบรมควรรู้สึกจริงจัง เป็นมิตร และตั้งอยู่บนการปฏิบัติ ระดับการเรียน วันที่ และความพร้อมของผู้เรียนสามารถสอบถามเพิ่มเติมได้',
        students: ['ผู้เริ่มต้นที่สนใจ', 'ผู้ปฏิบัติงานด้านการเยียวยา', 'ผู้ทำงานด้านสุขภาวะ', 'นักเรียนที่ต้องการเรียนเรกิอย่างจริงแท้'],
      },
      faq: {
        title: 'คำถามที่พบบ่อย',
        intro:
          'คำถามเหล่านี้ช่วยให้ผู้มาเยือนเข้าใจประสบการณ์ก่อนติดต่อ รายละเอียดเฉพาะสามารถพูดคุยโดยตรงได้',
        groups: [
          {
            title: 'เซสชันส่วนตัว',
            items: [
              { q: 'งานนี้เหมาะกับฉันไหม', a: 'อาจเหมาะหากคุณต้องการพัก ความสมดุล ความมั่นคงทางใจ หรือการเชื่อมต่อ การสอบถามสั้น ๆ จะช่วยให้เห็นขั้นตอนถัดไปที่เหมาะสม' },
              { q: 'ต้องมีประสบการณ์ด้านงานพลังงานมาก่อนไหม', a: 'ไม่จำเป็น ประสบการณ์นี้สามารถรองรับทั้งผู้เริ่มต้นและผู้มีประสบการณ์ด้วยจังหวะที่สงบและเคารพ' },
            ],
          },
          {
            title: 'รีทรีตและเวิร์กช็อป',
            items: [
              { q: 'รีทรีตเป็นแบบส่วนตัวหรือแบบกลุ่ม', a: 'รูปแบบอาจแตกต่างกัน เว็บไซต์นี้นำเสนอรีทรีตและเวิร์กช็อปแบบสอบถามก่อน จนกว่าจะยืนยันวันและรายละเอียดเฉพาะ' },
            ],
          },
          {
            title: 'การนัดหมายและการติดต่อ',
            items: [
              { q: 'ควรติดต่ออย่างไร', a: 'สามารถเริ่มจากแบบฟอร์ม WhatsApp หรืออีเมล ข้อความสั้น ๆ เกี่ยวกับสิ่งที่สนใจก็เพียงพอ' },
              { q: 'สถานที่อยู่ที่ไหน', a: 'ข้อมูลการค้นพบอ้างถึงเชียงดาว / ภาคเหนือของประเทศไทย ควรยืนยันรายละเอียดสถานที่ก่อนเผยแพร่จริง' },
            ],
          },
        ],
      },
      contact: {
        title: 'เริ่มต้นด้วยการสอบถามง่าย ๆ',
        name: 'ชื่อ',
        email: 'อีเมลหรือ WhatsApp',
        interest: 'เรื่องที่สนใจ',
        message: 'ข้อความ',
        submit: 'ส่งคำถาม',
        success: 'ขอบคุณ แบบฟอร์มตัวอย่างนี้พร้อมเชื่อมต่ออีเมลหรือระบบจองในอนาคต',
        options: ['เซสชันส่วนตัว', 'รีทรีตหรือเวิร์กช็อป', 'การอบรมเรกิ', 'คำถามทั่วไป'],
      },
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en',
  fallbackLng: 'en',
  interpolation: { escapeValue: false },
});

export default i18n;
