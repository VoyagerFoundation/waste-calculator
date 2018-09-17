class CheatSheetController < ApplicationController
  def show
    @facts = Fact.all
  end

  def random_fact
    ids = Fact.pluck(:id)
    Fact.find(ids.sample)
  end

  def contribute
  end
end
