export default {
  promptLabels: {
    actionRemove:       'Are you sure you want to remove this event?',
    actionExclude:      'Are you sure you want to remove this event occurrence?',
    actionCancel:       'Are you sure you want to cancel this event?',
    actionUncancel:     'Are you sure you want to uncancel this event?',
    actionSetStart:     'Are you sure you want to set this occurrence as the first?',
    actionSetEnd:       'Are you sure you want to set this occurrence as the last?',
    actionMove:         'Are you sure you want to move this event?',
    actionInclude:      'Are you sure you want to add an event occurrence?',
    move:               'Are you sure you want to move this event?',
    toggleAllDay:       'Are you sure you want to change whether this event occurs all day?',
    removeExistingTime: 'Are you sure you want to remove all event occurrences at this time?'
  },
  placeholder: {
    noTitle: '（无主题）'
  },
  patterns: {
    lastDay:        (day) => 'Last day of the month',
    lastDayOfMonth: (day) => 'Last day of ' + day.format('MMMM'),
    lastWeekday:    (day) => 'Last ' + day.format('dddd') + ' in ' + day.format('MMMM')
  },
  colors: [
    { text: '红' },
    { text: '粉' },
    { text: 'Purple' },
    { text: 'Deep Purple' },
    { text: 'Indigo' },
    { text: '蓝' },
    { text: 'Glue' },
    { text: 'Light Blue' },
    { text: 'Cyan' },
    { text: 'Teal' },
    { text: '绿' },
    { text: 'Light Green' },
    { text: 'Lime' },
    { text: '黄' },
    { text: 'Amber' },
    { text: '橙' },
    { text: 'Deep Orange' },
    { text: 'Brown' },
    { text: 'Blue Gray' },
    { text: 'Gray' },
    { text: '黑' }
  ],
  icons: [
    { text: 'Alarm' },
    { text: 'Star' },
    { text: 'Love' },
    { text: 'Action' },
    { text: 'Assignment' },
    { text: 'Warning' },
    { text: 'Money' },
    { text: 'Charge' },
    { text: 'Home' },
    { text: 'Play' },
    { text: 'Email' },
    { text: 'Phone' },
    { text: 'Chart' },
    { text: 'Biking' },
    { text: 'Travel' }
  ],
  defaults: {
    dsDay: {
      formats: {
        month:  'MMM'
      }
    },
    dsCalendarApp: {
      types: [
        { label: '天' },
        { label: '周' },
        { label: '月' },
        { label: '年' },
        { label: 'Schedule' },
        { label: '4 days' }
      ],
      formats: {
        today: 'dddd, MMMM D',
        xs: 'MMM'
      },
      labels: {
        next: (type) => type ? 'Next ' + type.label.toLowerCase() : 'Next',
        prev: (type) => type ? 'Previous ' + type.label.toLowerCase() : 'Previous',
        moveCancel: 'Cancel move',
        moveSingleEvent: 'Move event',
        moveOccurrence: 'Move just this event occurrence',
        moveAll: 'Move all event occurrences',
        moveDuplicate: 'Add event occurrence',
        promptConfirm: 'Yes',
        promptCancel: 'No',
        today: 'TODAY'
      }
    },
    dsAgendaEvent: {
      formats: {
        firstLine:  'ddd',
        secondLine: 'MMM Do',
        start:      'dddd, MMMM D',
        time:       'h:mm a'
      },
      labels: {
        allDay:   '全天',
        options:  'Options',
        close:    '关闭',
        day:      ['day', 'days'],
        days:     ['day', 'days'],
        minute:   ['minute', 'minutes'],
        minutes:  ['minute', 'minutes'],
        hour:     ['hour', 'hours'],
        hours:    ['hour', 'hours'],
        week:     ['week', 'weeks'],
        weeks:    ['week', 'weeks'],
        second:   ['second', 'seconds'],
        seconds:  ['second', 'seconds'],
        busy:     'Busy',
        free:     'Free'
      }
    },
    dsCalendarEventChip: {
      formats: {
        fullDay:          'ddd MMM Do YYYY',
        timed:            'ddd MMM Do YYYY'
      }
    },
    dsCalendarEventPopover: {
      formats: {
        start:    'dddd, MMMM D',
        time:     'h:mm a'
      },
      labels: {
        allDay:   '全天',
        options:  'Options',
        close:    '关闭',
        day:      ['day', 'days'],
        days:     ['day', 'days'],
        minute:   ['minute', 'minutes'],
        minutes:  ['minute', 'minutes'],
        hour:     ['hour', 'hours'],
        hours:    ['hour', 'hours'],
        week:     ['week', 'weeks'],
        weeks:    ['week', 'weeks'],
        second:   ['second', 'seconds'],
        seconds:  ['second', 'seconds'],
        busy:     'Busy',
        free:     'Free'
      }
    },
    dsCalendarEventCreatePopover: {
      formats: {
        start:    'dddd, MMMM D',
        time:     'h:mm a'
      },
      labels: {
        title:    '添加主题',
        allDay:   '全天',
        close:    '关闭',
        save:     '保存',
        day:      ['day', 'days'],
        days:     ['day', 'days'],
        minute:   ['minute', 'minutes'],
        minutes:  ['minute', 'minutes'],
        hour:     ['hour', 'hours'],
        hours:    ['hour', 'hours'],
        week:     ['week', 'weeks'],
        weeks:    ['week', 'weeks'],
        second:   ['second', 'seconds'],
        seconds:  ['second', 'seconds'],
        busy:     'Busy',
        free:     'Free',
        location: 'Add location',
        description: 'Add description',
        calendar: 'Calendar',
      },
      busyOptions: [
        {text: 'Busy'},
        {text: 'Free'}
      ]
    },
    dsSchedule: {
      labels: {
        editCustom:   '编辑'
      }
    },
    dsEvent: {
      labels: {
        moreActions:  'More actions...',
        cancel:       'Cancel event changes',
        save:         '保存',
        title:        '主题',
        exclusions:   'These are events or spans of time where a normally occurring event was excluded from the schedule. Events are excluded here if an event occurrence is moved.',
        inclusions:   'These are events or spans of time where events were added outside the normally occurring schedule. Events are added here if an event occurrence is moved.',
        cancelled:    'These are events or spans of time where events were cancelled.',
        edit:         'Edit event',
        add:          'Add event',
        location:     'Add location',
        description:  'Add description',
        calendar:     'Calendar',
        tabs: {
          details:    'Event Details',
          forecast:   'Forecast',
          removed:    'Removed',
          added:      'Added',
          cancelled:  'Cancelled'
        }
      },
      busyOptions: [
        {text: 'Busy'},
        {text: 'Free'}
      ]
    },
    dsScheduleActions: {
      labels: {
        remove:     'Remove this event',
        exclude:    'Remove this occurrence',
        cancel:     'Cancel this occurrence',
        uncancel:   'Undo cancellation',
        move:       'Move this occurrence',
        include:    'Add new occurrence',
        setStart:   'Set as first occurrence',
        setEnd:     'Set as last occurrence',
        pickerOk:   'OK',
        pickerCancel:'Cancel'
      }
    },
    dsScheduleForecast: {
      labels: {
        prefix:     'The forecast shows previous & next',
        suffix:     'event occurrences within a years time.'
      }
    },
    dsScheduleFrequencyDay: {
      labels: {
        type: 'Days'
      },
      options: [
        { text: 'Any day' },
        { text: 'On the following days...' },
        { text: 'Every _ days starting on _' }
      ],
      types: [
        { text: 'Day of the month' },
        { text: 'Last day of the month' },
        { text: 'Day of the year' }
      ]
    },
    dsScheduleFrequencyDayOfWeek: {
      weekdays: ['周日', '周一', '周二', '周三', '周四', '周五', '周六'],
      labels: {
        type: 'Days of week'
      },
      options: [
        { text: 'Any day of the week' },
        { text: 'On the following days of the week...' },
        { text: 'Every _ weekday starting on _' },
        { text: 'Weekends' },
        { text: 'Weekdays' }
      ]
    },
    dsScheduleFrequencyMonth: {
      labels: {
        type: 'Months'
      },
      months: [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
      ],
      options: [
        { text: 'Any month' },
        { text: 'On the following months...' },
        { text: 'Every _ months starting on _' }
      ]
    },

    dsScheduleFrequencyWeek: {
      labels: {
        type: 'Weeks'
      },
      options: [
        { text: 'Any week' },
        { text: 'On the following weeks...' },
        { text: 'Every _ weeks starting on _' }
      ],
      types: [
        { text: 'Week of the month (first week has a Thursday)' },
        { text: 'Weekspan of the month (starts on first day of month)' },
        { text: 'Full week of the month (0th = the week before if any)' },
        { text: 'Last weekspan of the month (starts on last day of month)' },
        { text: 'Last full week of the month (0th = the week after if any)' },
        { text: 'Week of the year (first week has a Thursday)' },
        { text: 'Weekspan of the year (starts on first day of year)' },
        { text: 'Full week of the year (0th = the week before if any)' },
        { text: 'Last weekspan of the year (starts on last day of year)' },
        { text: 'Last full week of the year (0th = the week after if any)' }
      ]
    },

    dsScheduleFrequencyYear: {
      labels: {
        type: 'Years'
      },
      options: [
        { text: 'Any year' },
        { text: 'On the following years...' },
        { text: 'Every _ years starting on _' }
      ]
    },

    dsScheduleSpan: {
      labels: {
        startless:  'Beginning of Time',
        endless:    'End of Time'
      },
      formats: {
        start:      'MMMM Do, YYYY',
        end:        'MMMM Do, YYYY'
      }
    },

    dsScheduleTime: {
      labels: {
        remove:     'Remove time',
        add:        'Add time'
      }
    },

    dsScheduleTimes: {
      labels: {
        all:        'All day',
        minute:     'minute',
        minutes:    'minutes',
        hour:       'hour',
        hours:      'hours',
        day:        'day',
        days:       'days',
        week:       'week',
        weeks:      'weeks',
        month:      'month',
        months:     'months',
        second:     'second',
        seconds:    'seconds'
      }
    },

    dsScheduleType: {
      formats: {
        date:       'LL'
      }
    },

    dsScheduleTypeCustomDialog: {
      labels: {
        save:     'Save',
        cancel:   'Cancel'
      }
    },

    dsWeekDayHeader: {
      formats: {
        weekday:    'ddd'
      }
    },

    dsWeeksView: {
      weekdays: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    },

    dsDaysView: {
      hours: [
        '0:00', '1:00', '2:00', '3:00', '4:00', '5:00', '6:00', '7:00', '8:00', '9:00', '10:00', '11:00',
        '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00'
      ]
    },

    dsDayPicker: {
      weekdays: ['周日', '周一', '周二', '周三', '周四', '周五', '周六'],
      labels: {
        prevMonth: '上一月',
        nextMonth: '下一月'
      }
    }
  }
}
