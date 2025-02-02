"""update customer model

Revision ID: 1266b7337ccf
Revises: 07ecfa17760e
Create Date: 2025-02-03 03:01:43.164318

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '1266b7337ccf'
down_revision = '07ecfa17760e'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('customers', schema=None) as batch_op:
        batch_op.add_column(sa.Column('username', sa.String(), nullable=True))
        batch_op.add_column(sa.Column('_password_hash', sa.String(), nullable=False))
        batch_op.add_column(sa.Column('dob', sa.Integer(), nullable=True))
        batch_op.add_column(sa.Column('address', sa.String(), nullable=True))
        batch_op.add_column(sa.Column('city', sa.String(), nullable=True))
        batch_op.add_column(sa.Column('state', sa.String(), nullable=True))
        batch_op.add_column(sa.Column('zipcode', sa.Integer(), nullable=True))
        batch_op.drop_column('age')

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('customers', schema=None) as batch_op:
        batch_op.add_column(sa.Column('age', sa.INTEGER(), nullable=True))
        batch_op.drop_column('zipcode')
        batch_op.drop_column('state')
        batch_op.drop_column('city')
        batch_op.drop_column('address')
        batch_op.drop_column('dob')
        batch_op.drop_column('_password_hash')
        batch_op.drop_column('username')

    # ### end Alembic commands ###
