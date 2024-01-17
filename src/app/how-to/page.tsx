import { Trans } from 'react-i18next/TransWithoutContext'
import { Metadata } from 'next'
import Link from 'next/link'
import { range, rotateArray } from '@giraugh/tools'

import AvailabilityViewer from '/src/components/AvailabilityViewer/AvailabilityViewer'
import Button from '/src/components/Button/Button'
import Content from '/src/components/Content/Content'
import Footer from '/src/components/Footer/Footer'
import Header from '/src/components/Header/Header'
import { P } from '/src/components/Paragraph/Text'
import Section from '/src/components/Section/Section'
import TimeRangeField from '/src/components/TimeRangeField/TimeRangeField'
import Video from '/src/components/Video/Video'
import { useTranslation } from '/src/i18n/server'
import { calculateTable, getWeekdayNames } from '/src/utils'

import styles from './page.module.scss'

export const generateMetadata = async (): Promise<Metadata> => {
  const { t } = await useTranslation('help')

  return {
    title: t('name'),
  }
}

const times = ['1100-12042021', '1115-12042021', '1130-12042021', '1145-12042021', '1200-12042021', '1215-12042021', '1230-12042021', '1245-12042021', '1300-12042021', '1315-12042021', '1330-12042021', '1345-12042021', '1400-12042021', '1415-12042021', '1430-12042021', '1445-12042021', '1500-12042021', '1515-12042021', '1530-12042021', '1545-12042021', '1600-12042021', '1615-12042021', '1630-12042021', '1645-12042021', '1100-13042021', '1115-13042021', '1130-13042021', '1145-13042021', '1200-13042021', '1215-13042021', '1230-13042021', '1245-13042021', '1300-13042021', '1315-13042021', '1330-13042021', '1345-13042021', '1400-13042021', '1415-13042021', '1430-13042021', '1445-13042021', '1500-13042021', '1515-13042021', '1530-13042021', '1545-13042021', '1600-13042021', '1615-13042021', '1630-13042021', '1645-13042021', '1100-14042021', '1115-14042021', '1130-14042021', '1145-14042021', '1200-14042021', '1215-14042021', '1230-14042021', '1245-14042021', '1300-14042021', '1315-14042021', '1330-14042021', '1345-14042021', '1400-14042021', '1415-14042021', '1430-14042021', '1445-14042021', '1500-14042021', '1515-14042021', '1530-14042021', '1545-14042021', '1600-14042021', '1615-14042021', '1630-14042021', '1645-14042021', '1100-15042021', '1115-15042021', '1130-15042021', '1145-15042021', '1200-15042021', '1215-15042021', '1230-15042021', '1245-15042021', '1300-15042021', '1315-15042021', '1330-15042021', '1345-15042021', '1400-15042021', '1415-15042021', '1430-15042021', '1445-15042021', '1500-15042021', '1515-15042021', '1530-15042021', '1545-15042021', '1600-15042021', '1615-15042021', '1630-15042021', '1645-15042021', '1100-16042021', '1115-16042021', '1130-16042021', '1145-16042021', '1200-16042021', '1215-16042021', '1230-16042021', '1245-16042021', '1300-16042021', '1315-16042021', '1330-16042021', '1345-16042021', '1400-16042021', '1415-16042021', '1430-16042021', '1445-16042021', '1500-16042021', '1515-16042021', '1530-16042021', '1545-16042021', '1600-16042021', '1615-16042021', '1630-16042021', '1645-16042021']

const Page = async () => {
  const { t, i18n } = await useTranslation(['common', 'help'])

  const table = calculateTable({ times, locale: i18n.language, timezone: 'UTC', timeFormat: '12h' })

  return <>
    <Content>
      <Header />

      <h1>{t('help:name')}</h1>

      <Video />

      <P>{t('help:p1')}</P>
      <P>{t('help:p2')}</P>

      <h2 className={styles.step}>{t('help:s1')}</h2>
      <P><Trans i18nKey="help:p3" t={t} i18n={i18n}>_<Link href="/">_</Link>_</Trans></P>
      <P>{t('help:p4')}</P>
      <div className={styles.fakeCalendar}>
        <div>{rotateArray(getWeekdayNames(i18n.language, 'short')).map(d => <span key={d}>{d}</span>)}</div>
        <div>{range(11, 17).map(d => <span key={d}>{d}</span>)}</div>
      </div>
      <P>{t('help:p5')}</P>
      <TimeRangeField name="time" staticValue={{ start: 11, end: 17 }} />

      <h2 className={styles.step}>{t('help:s2')}</h2>
      <P>{t('help:p6')}</P>
      <P>{t('help:p7')}</P>
      <AvailabilityViewer
        times={times}
        people={[{ name: 'Jenny', created_at: 1618232400, availability: ['1100-12042021', '1100-13042021', '1100-14042021', '1100-15042021', '1115-12042021', '1115-13042021', '1115-14042021', '1115-15042021', '1130-12042021', '1130-13042021', '1130-14042021', '1130-15042021', '1145-12042021', '1145-13042021', '1145-14042021', '1145-15042021', '1200-12042021', '1200-13042021', '1200-14042021', '1200-15042021', '1215-12042021', '1215-13042021', '1215-14042021', '1215-15042021', '1230-12042021', '1230-13042021', '1230-14042021', '1230-15042021', '1245-12042021', '1245-13042021', '1245-14042021', '1245-15042021', '1300-12042021', '1300-13042021', '1300-14042021', '1300-15042021', '1300-16042021', '1315-12042021', '1315-13042021', '1315-14042021', '1315-15042021', '1315-16042021', '1330-12042021', '1330-13042021', '1330-14042021', '1330-15042021', '1330-16042021', '1345-12042021', '1345-13042021', '1345-14042021', '1345-15042021', '1345-16042021', '1400-12042021', '1400-13042021', '1400-14042021', '1400-15042021', '1400-16042021', '1415-12042021', '1415-13042021', '1415-14042021', '1415-15042021', '1415-16042021', '1430-12042021', '1430-13042021', '1430-14042021', '1430-15042021', '1430-16042021', '1445-12042021', '1445-13042021', '1445-14042021', '1445-15042021', '1445-16042021', '1500-12042021', '1500-15042021', '1500-16042021', '1515-12042021', '1515-15042021', '1515-16042021', '1530-12042021', '1530-15042021', '1530-16042021', '1545-12042021', '1545-15042021', '1545-16042021', '1600-12042021', '1600-15042021', '1600-16042021', '1615-12042021', '1615-15042021', '1615-16042021', '1630-12042021', '1630-15042021', '1630-16042021', '1645-12042021', '1645-15042021', '1645-16042021'] }]}
        table={table}
      />

      <h2 className={styles.step}>{t('help:s3')}</h2>
      <P>{t('help:p8')}</P>
      <P>{t('help:p9')}</P>
      <P>{t('help:p10')}</P>
      <AvailabilityViewer
        times={times}
        people={[
          { name: 'Jenny', created_at: 1618232400, availability: ['1100-12042021', '1100-13042021', '1100-14042021', '1100-15042021', '1115-12042021', '1115-13042021', '1115-14042021', '1115-15042021', '1130-12042021', '1130-13042021', '1130-14042021', '1130-15042021', '1145-12042021', '1145-13042021', '1145-14042021', '1145-15042021', '1200-12042021', '1200-13042021', '1200-14042021', '1200-15042021', '1215-12042021', '1215-13042021', '1215-14042021', '1215-15042021', '1230-12042021', '1230-13042021', '1230-14042021', '1230-15042021', '1245-12042021', '1245-13042021', '1245-14042021', '1245-15042021', '1300-12042021', '1300-13042021', '1300-14042021', '1300-15042021', '1300-16042021', '1315-12042021', '1315-13042021', '1315-14042021', '1315-15042021', '1315-16042021', '1330-12042021', '1330-13042021', '1330-14042021', '1330-15042021', '1330-16042021', '1345-12042021', '1345-13042021', '1345-14042021', '1345-15042021', '1345-16042021', '1400-12042021', '1400-13042021', '1400-14042021', '1400-15042021', '1400-16042021', '1415-12042021', '1415-13042021', '1415-14042021', '1415-15042021', '1415-16042021', '1430-12042021', '1430-13042021', '1430-14042021', '1430-15042021', '1430-16042021', '1445-12042021', '1445-13042021', '1445-14042021', '1445-15042021', '1445-16042021', '1500-12042021', '1500-15042021', '1500-16042021', '1515-12042021', '1515-15042021', '1515-16042021', '1530-12042021', '1530-15042021', '1530-16042021', '1545-12042021', '1545-15042021', '1545-16042021', '1600-12042021', '1600-15042021', '1600-16042021', '1615-12042021', '1615-15042021', '1615-16042021', '1630-12042021', '1630-15042021', '1630-16042021', '1645-12042021', '1645-15042021', '1645-16042021'] },
          { name: 'Dakota', created_at: 1618232400, availability: ['1300-14042021', '1300-15042021', '1300-16042021', '1315-13042021', '1315-14042021', '1315-15042021', '1315-16042021', '1330-13042021', '1330-14042021', '1330-15042021', '1330-16042021', '1345-13042021', '1345-14042021', '1345-15042021', '1345-16042021', '1400-13042021', '1400-14042021', '1400-15042021', '1400-16042021', '1415-13042021', '1415-14042021', '1415-15042021', '1415-16042021', '1430-13042021', '1430-14042021', '1430-15042021', '1430-16042021', '1445-13042021', '1445-14042021', '1445-15042021', '1445-16042021', '1300-13042021', '1100-12042021', '1100-13042021', '1115-12042021', '1115-13042021', '1130-12042021', '1130-13042021', '1145-12042021', '1145-13042021'] },
          { name: 'Samson', created_at: 1618232400, availability: ['1100-16042021', '1115-16042021', '1130-16042021', '1145-16042021', '1200-16042021', '1215-16042021', '1230-16042021', '1245-16042021', '1300-16042021', '1315-16042021', '1330-16042021', '1345-16042021', '1400-16042021', '1415-16042021', '1430-16042021', '1445-16042021', '1500-16042021', '1515-16042021', '1530-16042021', '1545-16042021', '1600-16042021', '1615-16042021', '1630-16042021', '1645-16042021'] },
          { name: 'Mark', created_at: 1618232400, availability: ['1200-12042021', '1200-13042021', '1200-14042021', '1200-16042021', '1215-12042021', '1215-13042021', '1215-14042021', '1215-16042021', '1230-12042021', '1230-13042021', '1230-14042021', '1230-16042021', '1245-12042021', '1245-13042021', '1245-14042021', '1245-16042021', '1300-12042021', '1300-13042021', '1300-14042021', '1300-16042021', '1315-12042021', '1315-13042021', '1315-14042021', '1315-16042021', '1330-12042021', '1330-13042021', '1330-14042021', '1330-16042021', '1345-12042021', '1345-13042021', '1345-14042021', '1345-16042021', '1400-12042021', '1400-13042021', '1400-14042021', '1400-16042021', '1415-12042021', '1415-13042021', '1415-14042021', '1415-16042021', '1430-12042021', '1430-13042021', '1430-14042021', '1430-16042021', '1445-12042021', '1445-13042021', '1445-14042021', '1445-16042021', '1500-12042021', '1500-13042021', '1500-14042021', '1500-16042021', '1515-12042021', '1515-13042021', '1515-14042021', '1515-16042021', '1530-12042021', '1530-13042021', '1530-14042021', '1530-16042021', '1545-12042021', '1545-13042021', '1545-14042021', '1545-16042021'] },
          { name: 'Alex', created_at: 1618232400, availability: ['1200-13042021', '1200-14042021', '1215-13042021', '1215-14042021', '1230-13042021', '1230-14042021', '1245-13042021', '1245-14042021', '1300-13042021', '1300-14042021', '1315-13042021', '1315-14042021', '1330-13042021', '1330-14042021', '1345-13042021', '1345-14042021', '1400-13042021', '1400-14042021', '1415-13042021', '1415-14042021', '1430-13042021', '1430-14042021', '1445-13042021', '1445-14042021', '1500-13042021', '1500-14042021', '1515-13042021', '1515-14042021', '1530-13042021', '1530-14042021', '1545-13042021', '1545-14042021', '1200-12042021', '1215-12042021', '1545-12042021', '1230-12042021', '1245-12042021', '1300-12042021', '1315-12042021', '1330-12042021', '1345-12042021', '1400-12042021', '1415-12042021', '1430-12042021', '1445-12042021', '1500-12042021', '1515-12042021', '1530-12042021', '1100-15042021', '1100-16042021', '1115-15042021', '1115-16042021', '1130-15042021', '1130-16042021', '1145-15042021', '1145-16042021', '1200-15042021', '1200-16042021', '1215-15042021', '1215-16042021', '1230-15042021', '1230-16042021', '1245-15042021', '1245-16042021', '1300-15042021', '1300-16042021', '1315-15042021', '1315-16042021', '1330-15042021', '1330-16042021', '1345-15042021', '1345-16042021', '1400-15042021', '1400-16042021', '1415-15042021', '1415-16042021', '1430-15042021', '1430-16042021', '1445-15042021', '1445-16042021', '1500-15042021', '1500-16042021', '1515-15042021', '1515-16042021', '1530-15042021', '1530-16042021', '1545-15042021', '1545-16042021', '1600-15042021', '1600-16042021', '1615-15042021', '1615-16042021', '1630-15042021', '1630-16042021', '1645-15042021', '1645-16042021'] },
        ]}
        table={table}
      />
    </Content>

    <Section>
      <Content isCentered>
        <Button href="/">{t('common:cta')}</Button>
      </Content>
    </Section>

    <Footer />
  </>
}

export default Page
