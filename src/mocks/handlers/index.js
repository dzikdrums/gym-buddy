import { rest } from 'msw';
import { students as students_data } from '../data/students';
import { groups } from '../data/groups';

export const handlers = [
  rest.get('/groups', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        groups,
      })
    );
  }),

  rest.get('/students/:group', (req, res, ctx) => {
    const groupId = req.params.group;

    if (groupId) {
      const students = students_data.filter((student) => student.group === groupId);

      return res(
        ctx.status(200),
        ctx.json({
          students,
        })
      );
    }

    return res(
      ctx.status(200),
      ctx.json({
        students: students_data,
      })
    );
  }),
];
